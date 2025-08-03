"use client";
import { Button } from "@/components/ui/Button";
import { periods } from "@/data/main/subscription-plans";
import { cn } from "@/lib/utils";
import { useState } from "react";

function PeriodFilters() {
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly");
  const handleSelectPeriod = (period: string) => {
    setSelectedPeriod(period);
  };
  return (
    <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-5">
      {periods.map((period, index) => (
        <Button
          key={index}
          onClick={() => handleSelectPeriod(period)}
          className={cn(
            "font-medium py-1.5 px-6 rounded-sm",
            selectedPeriod === period
              ? "bg-primary text-white"
              : "border border-primary bg-white text-primary"
          )}
        >
          {period}
        </Button>
      ))}
    </div>
  );
}

export default PeriodFilters;
