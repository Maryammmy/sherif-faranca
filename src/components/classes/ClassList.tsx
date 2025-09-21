"use client";

import { useClasses, useRandomClasses } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";
import { IClassicClass } from "@/src/interfaces/main/home";
import ClassicClassCard from "./Card";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";
import { useState } from "react";
import { Button } from "../ui/Button";
import SwiperSlider from "../ui/SwiperSlider";
import { navBreakpoints } from "@/src/data";

function ClassList() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // random classes (للـ default)
  const { data } = useRandomClasses();
  const randomClassList: IClassicClass[] = data;

  // الفوكاس أريا + الكلاسات
  const { data: classes } = useClasses();
  const classList: IClassicClass[] = classes?.data;

  // الكلاسات المختارة حسب الفوكاس أريا
  const selectedClasses = classList?.find(
    (item) => item.focusAreaId === selectedId
  )?.programs;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5">
      {!data || !classes ? (
        <SkeletonCard count={5} />
      ) : (
        classList?.length > 0 && (
          <>
            {/* أزرار الفوكس أريا */}
            <SwiperSlider
              slides={classList?.map(({ focusAreaId, focusAreaName }) => {
                const isSelected = selectedId === focusAreaId;
                return (
                  <Button
                    key={focusAreaId}
                    onClick={() => setSelectedId(focusAreaId)}
                    className={`w-full p-3 rounded-md font-medium transition-colors ${
                      isSelected
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {focusAreaName}
                  </Button>
                );
              })}
              slidesPerView={2}
              spaceBetween={20}
              pagination={false}
              breakpoints={navBreakpoints}
              loop={false}
              centerInsufficientSlides
              className="col-span-full"
            />

            {/* عرض البرامج */}
            {selectedId === null ? (
              // default → random classes
              randomClassList?.length ? (
                randomClassList
                  .flatMap((randomClass) => randomClass.programs)
                  .map((program) => (
                    <ClassicClassCard
                      key={program?.programDayId}
                      classicClass={program}
                    />
                  ))
              ) : (
                <EmptyStatePage message="No classes found" />
              )
            ) : selectedClasses?.length ? (
              // لو مختار focus area ومعاه برامج
              selectedClasses.map((classicClass) => (
                <ClassicClassCard
                  key={classicClass?.programDayId}
                  classicClass={classicClass}
                />
              ))
            ) : (
              // لو مختار focus area ومفيش برامج
              <EmptyStatePage message="No classes found" />
            )}
          </>
        )
      )}
    </div>
  );
}

export default ClassList;
