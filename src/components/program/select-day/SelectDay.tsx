"use client";

import { Button } from "@/src/components/ui/Button";
import { cn } from "@/src/lib/utils";
import { Award, Calendar, MoveRight } from "lucide-react";
import { useRouter } from "@/src/i18n/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { IProgramDays } from "@/src/interfaces/program";
import { useTranslations } from "next-intl";

interface IProps {
  programId: string;
  data: IProgramDays;
}

export default function SelectDay({ programId, data }: IProps) {
  const t = useTranslations("selectDay");
  const router = useRouter();
  const { totalDays, completedDays, weeks } = data;

  const [activeDay, setActiveDay] = useState<{
    week: number | null;
    day: number | null;
    dayId: number | null;
  }>({ week: null, day: null, dayId: null });

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // أول يوم مسموح تبدأه (أول يوم مش مخلص)
  const getFirstIncompleteDay = () => {
    for (const week of weeks) {
      for (const day of week?.days) {
        if (!day.isCompleted) {
          return day;
        }
      }
    }
    // لو كله مخلص، رجّع آخر يوم
    const lastWeek = weeks[weeks?.length - 1];
    return lastWeek?.days[lastWeek?.days?.length - 1];
  };

  const handleStartTraining = () => {
    if (!weeks?.length) return;
    let targetDayId = activeDay?.dayId;

    if (!targetDayId) {
      const firstIncompleteDay = getFirstIncompleteDay();
      targetDayId = firstIncompleteDay?.dayId;
    }

    router.push(`/programs/${programId}/days/${targetDayId}/exercises`);
  };

  // check: اليوم متاح ولا لأ
  const isDayUnlocked = (weekIdx: number, dayIdx: number) => {
    const flatDays = weeks?.flatMap((w) => w.days);
    const currentDay = flatDays?.find(
      (d) => d?.dayNumber === dayIdx + 1 && d === weeks[weekIdx]?.days[dayIdx]
    );

    const prevDay = currentDay
      ? flatDays?.find((d) => d?.dayId === currentDay?.dayId - 1) || null
      : null;

    // أول يوم دايمًا مفتوح
    if (weekIdx === 0 && dayIdx === 0) return true;

    // مسموح تفتح اليوم لو هو مخلص، أو اليوم اللي قبله مخلص
    if (currentDay?.isCompleted) return true;
    if (prevDay?.isCompleted) return true;

    return false;
  };

  return (
    <div className="program-layout">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm text-muted-foreground">
            {completedDays}/{totalDays} {t("daysFinished")}
          </p>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div
              className="h-2 bg-primary rounded-full"
              style={{
                width: `${(completedDays / totalDays) * 100}%`,
              }}
            />
          </div>
        </div>
        {weeks.map((week) => (
          <div key={week.weekNumber}>
            <div className="-ms-1.5 flex items-center gap-1.5 mb-3">
              <div
                className={cn(
                  "w-5 h-5 rounded-full shrink-0",
                  activeDay.week === week.weekNumber
                    ? "bg-primary"
                    : "bg-gray-200"
                )}
              ></div>
              <span className="shrink-0 text-primary">
                <Calendar />
              </span>
              <h3 className="text-gray-700 text-lg font-semibold">
                {t("week")} {week.weekNumber}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <div
                style={{ height: `${height}px` }}
                className="w-1.5 rounded-2xl bg-gray-200"
              >
                <div
                  className="bg-primary rounded-full"
                  style={{
                    height: activeDay.week === week.weekNumber ? "14.3%" : "0%",
                  }}
                />
              </div>
              <div
                ref={contentRef}
                className="py-2 flex flex-wrap items-center lg:justify-between gap-3 w-full"
              >
                {week?.days?.map((day, dayIdx) => {
                  const isActive =
                    activeDay.week === week.weekNumber &&
                    activeDay.day === day.dayNumber;

                  const unlocked = isDayUnlocked(week.weekNumber - 1, dayIdx);

                  return (
                    <Fragment key={day.dayId}>
                      <Button
                        onClick={() =>
                          unlocked &&
                          setActiveDay({
                            week: week.weekNumber,
                            day: day.dayNumber,
                            dayId: day.dayId,
                          })
                        }
                        disabled={!unlocked}
                        className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full sm:rounded-2xl border
                          ${
                            isActive
                              ? "bg-primary text-white"
                              : unlocked
                              ? "bg-gray-100 text-gray-700"
                              : "bg-gray-200 text-gray-400 cursor-not-allowed"
                          }
                        `}
                      >
                        {day.dayNumber}
                      </Button>
                      <MoveRight
                        className={cn(
                          "w-7 h-7 sm:w-8 sm:h-8",
                          isActive ? "text-primary" : "text-gray-100"
                        )}
                      />
                    </Fragment>
                  );
                })}
                <span className="text-gray-400">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8" />
                </span>
              </div>
            </div>
          </div>
        ))}
        <div>
          <Button
            onClick={handleStartTraining}
            className="bg-primary hover:bg-primary/80 font-medium text-white p-3 w-full sm:w-1/6 rounded-md"
          >
            {t("startTraining")}
          </Button>
        </div>
      </div>
    </div>
  );
}
