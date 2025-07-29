"use client";

import { useEffect, useRef, useState } from "react";
import { floorToTen } from "@/lib/utils";
import RulerTick from "./RulerTick";

export default function SelectWeight() {
  const minWeight = 30;
  const maxWeight = 200;
  const rulerRef = useRef<HTMLDivElement>(null);
  const [selectedWeight, setSelectedWeight] = useState(60);

  const handleScroll = () => {
    if (rulerRef.current) {
      const itemWidth = 20;
      const scrollLeft = rulerRef.current.scrollLeft;
      const centerOffset = rulerRef.current.offsetWidth / 2;
      const centerPosition = scrollLeft + centerOffset - itemWidth / 2;
      const newWeight = minWeight + Math.round(centerPosition / itemWidth);
      if (
        newWeight !== selectedWeight &&
        newWeight >= minWeight &&
        newWeight <= maxWeight
      ) {
        setSelectedWeight(newWeight);
      }
    }
  };

  useEffect(() => {
    if (rulerRef.current) {
      const itemWidth = 20;
      const centerOffset = rulerRef.current.offsetWidth / 2;
      const initialScroll =
        (selectedWeight - minWeight) * itemWidth - centerOffset + itemWidth / 2;
      rulerRef.current.scrollTo({ left: initialScroll, behavior: "smooth" });
    }
  }, [selectedWeight]);

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 pt-5">
      <div className="bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold text-secondary">
        Current Weight ={" "}
        <span className="text-primary">{selectedWeight}KG</span>
      </div>
      <div
        className="relative w-full max-w-7xl overflow-x-scroll scrollbar-none"
        ref={rulerRef}
        onScroll={handleScroll}
      >
        <div className="relative h-24 w-[2000px] flex items-end">
          {Array.from({ length: maxWeight - minWeight + 1 }, (_, i) => {
            const weight = minWeight + i;
            const isMajor = weight % 10 === 0;
            const startHighlight = floorToTen(selectedWeight);
            const shouldHighlight =
              weight >= startHighlight && weight <= selectedWeight;

            return (
              <RulerTick
                key={weight}
                weight={weight}
                isMajor={isMajor}
                shouldHighlight={shouldHighlight}
                onClick={() => setSelectedWeight(weight)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
