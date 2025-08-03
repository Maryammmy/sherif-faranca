"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { workoutFrequencies } from "@/data/questions";
import { Button } from "@/components/ui/Button";

const SelectWorkoutFrequency = () => {
  const [selectedWorkoutTime, setSelectedWorkoutTime] = useState(4);

  const handleClickWorkoutTime = (val: number) => {
    setSelectedWorkoutTime(val);
  };

  const selectedItem = workoutFrequencies.find(
    (item) => item.value === selectedWorkoutTime
  );

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 pt-5">
      {/* Calendar Image */}
      <div className="relative w-40 h-40">
        <Image src={`/${selectedItem?.src}.png`} alt="Calendar" fill />
      </div>
      <div className="space-y-2 text-center">
        {/* Time Text */}
        <header>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-700">
            {selectedWorkoutTime} Time{selectedWorkoutTime > 1 ? "s" : ""} /
            Week
          </h1>
        </header>
        {/* Description */}
        <div className="max-w-3xs mx-auto">
          <p className="text-secondary text-sm sm:text-base">
            {selectedItem?.label}
          </p>
        </div>
      </div>
      {/* Dot Selector */}
      <div className="bg-primary/30 w-full sm:w-96 mx-auto p-2 rounded-full flex items-center justify-between gap-4">
        {workoutFrequencies.map(({ value }) => (
          <Button
            key={value}
            onClick={() => handleClickWorkoutTime(value)}
            className={cn(
              "bg-white w-5 h-5 rounded-full transition-all duration-300 ease-in-out",
              selectedWorkoutTime === value &&
                "bg-primary border-2 border-white w-6 h-6"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectWorkoutFrequency;
