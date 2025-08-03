"use client";

import ClassicClassCard from "@/components/main/home/ClassicClassCard";
import { Button } from "@/components/ui/Button";
import { classicClass } from "@/data/main/home";
import { useState } from "react";

export default function ClassicClass() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-800 text-xl font-semibold">Classic Class</h2>
        <Button className="border-b border-secondary text-secondary font-medium">
          <span>View All</span>
        </Button>
      </div>
      <div className=" flex items-center justify-center">
        <div className="flex items-center gap-5">
          {classicClass.map((item) => {
            const isSelected = selectedId === item?.id;
            return (
              <Button
                key={item?.id}
                onClick={() => item?.id && setSelectedId(item.id)}
                className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition-colors ${
                  isSelected
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <h3>{item?.title}</h3>
              </Button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <ClassicClassCard key={index} />
        ))}
      </div>
    </div>
  );
}
