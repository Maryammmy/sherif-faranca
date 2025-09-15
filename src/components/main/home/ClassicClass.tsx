"use client";

import ClassicClassCard from "@/src/components/main/home/ClassicClassCard";
import { Button } from "@/src/components/ui/Button";
import { HomeBreakpoints, navBreakpoints } from "@/src/data";
import { useHome } from "@/src/hooks";
import { IClassicClass } from "@/src/interfaces/main/home";
import { useState } from "react";
import SwiperSlider from "../../ui/SwiperSlider";
import { SingleSkeletonCard } from "../../skeleton/Card";
import { EmptyState } from "../../ui/empty-state/EmptyState";

export default function ClassicClass() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { data } = useHome();
  const classicClasses: IClassicClass[] = data?.data?.classicClasses;
  const randomClasses: IClassicClass[] = data?.data?.randomClasses;
  // هات الـ programs الخاصة بالـ selectedId
  const selectedClasses = classicClasses?.find(
    (item) => item.focusAreaId === selectedId
  )?.programs;
  return (
    <div>
      {data && (
        <div className="flex items-center justify-between">
          <h2 className="text-gray-800 text-xl font-semibold">Classic Class</h2>
          <Button className="border-b border-secondary text-secondary font-medium">
            <span>View All</span>
          </Button>
        </div>
      )}
      {!data ? (
        <SwiperSlider
          slides={Array.from({ length: 4 }).map((_, index) => (
            <SingleSkeletonCard key={index} />
          ))}
          spaceBetween={20}
          pagination={false}
          breakpoints={HomeBreakpoints}
          loop={false}
        />
      ) : (
        classicClasses?.length > 0 && (
          <>
            {/* أزرار الفوكس أريا */}
            <SwiperSlider
              slides={classicClasses?.map(({ focusAreaId, focusAreaName }) => {
                const isSelected = selectedId === focusAreaId;
                return (
                  <Button
                    key={focusAreaId}
                    onClick={() => setSelectedId(focusAreaId)}
                    className={`w-full p-2 rounded-md cursor-pointer font-medium transition-colors ${
                      isSelected
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <h3>{focusAreaName}</h3>
                  </Button>
                );
              })}
              slidesPerView={2}
              spaceBetween={20}
              pagination={false}
              breakpoints={navBreakpoints}
              loop={false}
              centerInsufficientSlides
              className="mt-5"
            />

            {/* عرض البرامج */}
            <div className="py-5">
              {selectedClasses?.length ? (
                <SwiperSlider
                  slides={selectedClasses.map((classicClass) => (
                    <ClassicClassCard
                      key={classicClass?.programDayId}
                      classicClass={classicClass}
                    />
                  ))}
                  spaceBetween={20}
                  pagination={false}
                  breakpoints={HomeBreakpoints}
                  loop={false}
                />
              ) : randomClasses?.length ? (
                <SwiperSlider
                  slides={randomClasses
                    .flatMap((randomClass) => randomClass.programs)
                    .map((program) => (
                      <ClassicClassCard
                        key={program?.programDayId}
                        classicClass={program}
                      />
                    ))}
                  spaceBetween={20}
                  pagination={false}
                  breakpoints={HomeBreakpoints}
                  loop={false}
                />
              ) : (
                <EmptyState message="No classic classes found" />
              )}
            </div>
          </>
        )
      )}
    </div>
  );
}
