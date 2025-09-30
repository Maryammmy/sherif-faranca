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
import Link from "next/link";

export default function ClassicClass() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { data } = useHome();
  const classicClasses: IClassicClass[] = data?.data?.classicClasses;
  const randomClasses: IClassicClass[] = data?.data?.randomClasses;

  // البرامج الخاصة بالـ selectedId
  const selectedClasses = classicClasses?.find(
    (item) => item.focusAreaId === selectedId
  )?.videos;
  return (
    <div>
      {data && (
        <div className="flex items-center justify-between">
          <h2 className="text-gray-800 text-xl font-semibold">Classes</h2>
          <Link
            href="/classes"
            className="border-b border-secondary text-secondary font-medium"
          >
            <span>View All</span>
          </Link>
        </div>
      )}
      {!data ? (
        // Skeleton loading
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
              className="mt-5"
            />

            {/* عرض البرامج */}
            <div className="py-5">
              {selectedId === null ? (
                // Default → Random Classes
                randomClasses?.length ? (
                  <SwiperSlider
                    slides={randomClasses
                      .flatMap((randomClass) => randomClass.videos)
                      .map((program) => (
                        <ClassicClassCard
                          key={program?.videoId}
                          classicClass={program}
                        />
                      ))}
                    spaceBetween={20}
                    pagination={false}
                    breakpoints={HomeBreakpoints}
                    loop={false}
                  />
                ) : (
                  <EmptyState message="No classes found" />
                )
              ) : selectedClasses?.length ? (
                // لو اخترت focus area وعنده برامج
                <SwiperSlider
                  slides={selectedClasses.map((classicClass) => (
                    <ClassicClassCard
                      key={classicClass?.videoId}
                      classicClass={classicClass}
                    />
                  ))}
                  spaceBetween={20}
                  pagination={false}
                  breakpoints={HomeBreakpoints}
                  loop={false}
                />
              ) : (
                // لو اخترت focus area ومفيش برامج
                <EmptyState message="No classes found" />
              )}
            </div>
          </>
        )
      )}
    </div>
  );
}
