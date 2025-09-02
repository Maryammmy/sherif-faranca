"use client";

import { useEffect, useRef, useState } from "react";
import { floorToTen } from "@/src/lib/utils";
import RulerTick from "./RulerTick";

export default function SelectHeight() {
  const minHeight = 150;
  const maxHeight = 300;
  const rulerRef = useRef<HTMLDivElement>(null);
  const [selectedHeight, setSelectedHeight] = useState(160);

  // --- Drag state ---
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    const stored = sessionStorage.getItem("heightCm");
    if (stored) {
      setSelectedHeight(Number(stored));
    } else {
      sessionStorage.setItem("heightCm", "160");
    }
  }, []);

  const handleScroll = () => {
    if (rulerRef.current) {
      const itemWidth = 20;
      const scrollLeft = rulerRef.current.scrollLeft;
      const centerOffset = rulerRef.current.offsetWidth / 2;
      const centerPosition = scrollLeft + centerOffset - itemWidth / 2;
      const newHeight = minHeight + Math.round(centerPosition / itemWidth);

      if (
        newHeight !== selectedHeight &&
        newHeight >= minHeight &&
        newHeight <= maxHeight
      ) {
        setSelectedHeight(newHeight);
        sessionStorage.setItem("heightCm", newHeight.toString());
      }
    }
  };

  useEffect(() => {
    if (rulerRef.current) {
      const itemWidth = 20;
      const centerOffset = rulerRef.current.offsetWidth / 2;
      const initialScroll =
        (selectedHeight - minHeight) * itemWidth - centerOffset + itemWidth / 2;
      rulerRef.current.scrollTo({ left: initialScroll, behavior: "smooth" });
    }
  }, [selectedHeight]);

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
        Current Height ={" "}
        <span className="text-primary">{selectedHeight}Cm</span>
      </div>
      <div
        className="relative w-full max-w-7xl overflow-x-scroll scrollbar-none cursor-grab active:cursor-grabbing"
        ref={rulerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-24 w-[1800px] flex items-end">
          {Array.from({ length: maxHeight - minHeight + 1 }, (_, i) => {
            const height = minHeight + i;
            const isMajor = height % 10 === 0;
            const startHighlight = floorToTen(selectedHeight);
            const shouldHighlight =
              height >= startHighlight && height <= selectedHeight;

            return (
              <RulerTick
                key={height}
                value={height}
                isMajor={isMajor}
                shouldHighlight={shouldHighlight}
                onClick={() => {
                  setSelectedHeight(height);
                  sessionStorage.setItem("heightCm", height.toString());
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
