"use client";

import { useEffect, useRef, useState } from "react";
import { floorToTen } from "@/src/lib/utils";
import RulerTick from "./RulerTick";
import { Button } from "@/src/components/ui/Button";

export default function WeightSelector() {
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
      <div className="bg-gray-100 px-6 py-3 rounded-lg text-sm sm:text-lg font-semibold text-secondary">
        Current Weight ={" "}
        <span className="text-primary">{selectedWeight}KG</span>
      </div>
      <div
        className="relative w-full overflow-x-scroll scrollbar-none"
        ref={rulerRef}
        onScroll={handleScroll}
      >
        <div className="relative w-[2000px] flex items-end">
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
      <Button className="w-full bg-primary py-3 font-medium text-white rounded-md">
        Change
      </Button>
    </div>
  );
}
