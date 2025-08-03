"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Award, Calendar, MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

interface IProps {
  programId: string;
}
const WEEKS = 4;
const DAYS_PER_WEEK = 7;

export default function SelectDay({ programId }: IProps) {
  const router = useRouter();
  const [activeDay, setActiveDay] = useState({ week: 1, day: 1 });
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

  return (
    <div className="program-layout">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm text-muted-foreground">0/28 Days Finished</p>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div
              className="h-2 bg-primary rounded-full"
              style={{ width: "3.6%" }}
            />
          </div>
        </div>
        {Array.from({ length: WEEKS }, (_, weekIdx) => (
          <div key={weekIdx}>
            <div className="-ms-1.5 flex items-center gap-1.5 mb-3">
              <div
                className={cn(
                  "w-5 h-5 rounded-full shrink-0",
                  activeDay.week === weekIdx + 1 ? "bg-primary" : "bg-gray-200"
                )}
              ></div>
              <span className="shrink-0 text-primary">
                <Calendar />
              </span>
              <h3 className="text-gray-700 text-lg font-semibold">
                Week {weekIdx + 1}
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
                    height: activeDay.week === weekIdx + 1 ? "14.3%" : "0%",
                  }}
                />
              </div>
              <div
                ref={contentRef}
                className="py-2 flex flex-wrap items-center lg:justify-between gap-3 w-full"
              >
                {Array.from({ length: DAYS_PER_WEEK }, (_, dayIdx) => {
                  const isActive =
                    activeDay.week === weekIdx + 1 &&
                    activeDay.day === dayIdx + 1;
                  return (
                    <Fragment key={dayIdx}>
                      <Button
                        onClick={() =>
                          setActiveDay({ week: weekIdx + 1, day: dayIdx + 1 })
                        }
                        className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full sm:rounded-2xl border
                    ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700"
                    }
                  `}
                      >
                        {dayIdx + 1}
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
            onClick={() => router.push(`/programs/${programId}/exercises`)}
            className="bg-primary hover:bg-primary/80 font-medium text-white py-3 w-full sm:w-60 rounded-md"
          >
            Start Training
          </Button>
        </div>
      </div>
    </div>
  );
}
