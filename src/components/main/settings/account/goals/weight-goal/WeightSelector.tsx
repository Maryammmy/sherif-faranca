"use client";

import { useEffect, useRef, useState } from "react";
import { floorToTen } from "@/src/lib/utils";
import RulerTick from "./RulerTick";
import Loader from "@/src/components/loader/Loader";
import { Button } from "@/src/components/ui/Button";
import { useTranslations } from "next-intl";
import { targetWeightAPI } from "@/src/services/mutations/goals";
import toast from "react-hot-toast";
import { useTargetWeight } from "@/src/hooks";
import { SingleSkeletonCard } from "@/src/components/skeleton/Card";
import { useQueryClient } from "@tanstack/react-query";

interface IProps {
  onClose: () => void;
}
export default function WeightSelector({ onClose }: IProps) {
  const t = useTranslations("myGoal.weightGoalModal");

  const minWeight = 30;
  const maxWeight = 200;

  const rulerRef = useRef<HTMLDivElement>(null);
  const [selectedWeight, setSelectedWeight] = useState(60);
  const [initialized, setInitialized] = useState(false);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const { data } = useTargetWeight();
  // --- Drag state ---
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  useEffect(() => {
    if (data) {
      setSelectedWeight(data?.data);
    }
  }, [data]);
  // --- بعد اختيار الوزن، نعمل scroll لمكانه ---
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
  // --- Mouse drag ---
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

  // --- Touch drag (mobile) ---
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

  const changeTargetWeight = async () => {
    setLoading(true);
    const response = await targetWeightAPI({ weight: selectedWeight });
    if (response?.success) {
      toast.success(response.message);
      queryClient.invalidateQueries({ queryKey: ["targetWeight"] });
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["myGoals"] });
        onClose();
      }, 500);
    } else toast.error(response.message);
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 pt-5">
      {!data ? (
        <SingleSkeletonCard className="h-10" />
      ) : (
        <div className="bg-gray-100 px-6 py-3 rounded-lg sm:text-lg font-semibold text-secondary">
          {t("targetWeight")} ={" "}
          <span className="text-primary">
            {selectedWeight}
            {t("kg")}
          </span>
        </div>
      )}
      <div
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
        {/* نحسب العرض الديناميكي بدل 2000px */}
        <div
          className="relative h-24 flex items-end"
          style={{
            width: `${(maxWeight - minWeight + 1) * 20}px`,
          }}
        >
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
                onClick={() => setSelectedWeight(weight)}
              />
            );
          })}
        </div>
      </div>

      <Button
        onClick={changeTargetWeight}
        className="w-full bg-primary py-3 font-medium text-white rounded-md"
      >
        {loading ? <Loader /> : t("change")}
      </Button>
    </div>
  );
}
