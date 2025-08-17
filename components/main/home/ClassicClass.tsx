"use client";

import ClassicClassCard from "@/components/main/home/ClassicClassCard";
import { Button } from "@/components/ui/Button";
import { useHome } from "@/hooks";
import { IClassicClass } from "@/interfaces/main/home";
import { useState } from "react";

export default function ClassicClass() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { data } = useHome();
  const classicClasses: IClassicClass[] = data?.data?.classicClasses;
  // هات الـ programs الخاصة بالـ selectedId
  const selectedClasses = classicClasses?.find(
    (item) => item.focusAreaId === selectedId
  )?.programs;
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-800 text-xl font-semibold">Classic Class</h2>
        <Button className="border-b border-secondary text-secondary font-medium">
          <span>View All</span>
        </Button>
      </div>
      {data && classicClasses?.length && (
        <>
          {/* أزرار الفوكس أريا */}
          <div className="flex justify-center items-center gap-5 pt-5">
            {classicClasses?.map(({ focusAreaId, focusAreaName }) => {
              const isSelected = selectedId === focusAreaId;
              return (
                <Button
                  key={focusAreaId}
                  onClick={() => setSelectedId(focusAreaId)}
                  className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition-colors ${
                    isSelected
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <h3>{focusAreaName}</h3>
                </Button>
              );
            })}
          </div>

          {/* عرض البرامج */}
          <div className="grid gap-5 py-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {selectedClasses?.length ? (
              selectedClasses?.map((classicClass) => (
                <ClassicClassCard
                  key={classicClass?.programDayId}
                  classicClass={classicClass}
                />
              ))
            ) : (
              <p className="col-span-full text-gray-500 text-center font-medium">
                Select a Focus Area to view programs
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
