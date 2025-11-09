"use client";

import { useEffect, useRef, useState } from "react";
import { floorToTen } from "@/src/lib/utils";
import RulerTick from "./RulerTick";
import { useTranslations } from "next-intl";

export default function SelectWeight() {
  const minWeight = 30;
  const maxWeight = 200;
  const t = useTranslations("weight");
  const rulerRef = useRef<HTMLDivElement>(null);
  const [selectedWeight, setSelectedWeight] = useState(60);
  const [initialized, setInitialized] = useState(false);

  // --- Drag state ---
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    const stored = sessionStorage.getItem("weightKg");
    if (stored) {
      setSelectedWeight(Number(stored));
    } else {
      sessionStorage.setItem("weightKg", "60");
    }
  }, []);

  useEffect(() => {
    if (rulerRef.current && !initialized) {
      const itemWidth = 20;
      const centerOffset = rulerRef.current.offsetWidth / 2;
      const targetScroll =
        (selectedWeight - minWeight) * itemWidth - centerOffset + itemWidth / 2;
      rulerRef.current.scrollTo({ left: targetScroll, behavior: "instant" });
      setInitialized(true);
    }
  }, [initialized, selectedWeight]);

  // --- Handle Mouse Drag ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!rulerRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeftStart.current = rulerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !rulerRef.current) return;
    const dx = e.pageX - startX.current;
    rulerRef.current.scrollLeft = scrollLeftStart.current - dx;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // --- Handle Touch Drag (Mobile) ---
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!rulerRef.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    scrollLeftStart.current = rulerRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !rulerRef.current) return;
    const dx = e.touches[0].pageX - startX.current;
    rulerRef.current.scrollLeft = scrollLeftStart.current - dx;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 pt-5">
      <div className="bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold text-secondary">
        {t("currentWeight")} ={" "}
        <span className="text-primary">
          {selectedWeight}
          {t("kg")}
        </span>
      </div>
      <div
        dir="ltr"
        className="relative w-full max-w-7xl overflow-x-scroll scrollbar-none cursor-grab active:cursor-grabbing"
        ref={rulerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
                value={weight}
                isMajor={isMajor}
                shouldHighlight={shouldHighlight}
                onClick={() => {
                  setSelectedWeight(weight);
                  sessionStorage.setItem("weightKg", weight.toString());
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
