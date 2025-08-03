"use client";
import { Button } from "@/components/ui/Button";
import { workoutTimeFilters } from "@/data/main/settings/account/workouts";
import { cn } from "@/lib/utils";
import { useState } from "react";

function WorkoutTimeFilters() {
  const [selectedTime, setSelectedTime] = useState("today");
  const handleSelectSection = (time: string) => {
    setSelectedTime(time);
  };
  return (
    <div className="grid grid-cols-3 sm:flex sm:items-center sm:justify-center gap-5">
      {workoutTimeFilters.map((time, index) => (
        <Button
          key={index}
          onClick={() => handleSelectSection(time)}
          className={cn(
            "font-medium py-1 sm:px-4 text-sm sm:text-base rounded-lg capitalize",
            selectedTime === time
              ? "bg-primary text-white"
              : "border sm:border-none text-secondary"
          )}
        >
          {time}
        </Button>
      ))}
    </div>
  );
}

export default WorkoutTimeFilters;
