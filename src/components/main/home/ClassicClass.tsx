"use client";

import ClassicClassCard from "@/src/components/main/home/ClassicClassCard";
import { Button } from "@/src/components/ui/Button";
import { navBreakpoints } from "@/src/data";
import { useHome } from "@/src/hooks";
import { IClassicClass } from "@/src/interfaces/main/home";
import { useState } from "react";
import SwiperSlider from "../../ui/SwiperSlider";
import { SkeletonCard } from "../../skeleton/Card";

export default function ClassicClass() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { data } = useHome();
  const classicClasses: IClassicClass[] = data?.data?.classicClasses;
  const randomClasses: IClassicClass[] = data?.data?.randomClasses;
  console.log(data);
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
        // shimmer effect skeleton loader
        <div className="grid gap-5 py-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <SkeletonCard count={4} />
        </div>
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
              className="mt-5"
            />

            {/* عرض البرامج */}
            <div className="grid gap-5 py-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {selectedClasses?.length ? (
                selectedClasses.map((classicClass) => (
                  <ClassicClassCard
                    key={classicClass?.programDayId}
                    classicClass={classicClass}
                  />
                ))
              ) : randomClasses?.length ? (
                randomClasses
                  .flatMap((randomClass) => randomClass.programs)
                  .map((program) => (
                    <ClassicClassCard
                      key={program?.programDayId}
                      classicClass={program}
                    />
                  ))
              ) : (
                <p className="col-span-full text-gray-500 text-center font-medium">
                  No classic classes found
                </p>
              )}
            </div>
          </>
        )
      )}
    </div>
  );
}
