"use client";
import { Button } from "@/components/ui/Button";
import { goals } from "@/data/questions";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function SelectGoal() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const handleSelectGoal = (goal: string) => {
    setSelectedGoal(goal);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
      {goals.map(({ src, label }) => (
        <Button
          key={src}
          onClick={() => handleSelectGoal(label)}
          className={cn(
            "bg-white relative flex flex-col sm:flex-row gap-4 sm:gap-2 sm:justify-between items-center p-4 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
            selectedGoal === label &&
              "border-2 border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedGoal === label && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <h5 className="text-center text-gray-700 font-bold text-2xl capitalize">
            {label}
          </h5>
          <div className="w-40 h-[200px] relative rounded-2xl overflow-hidden">
            <Image src={`/${src}.png`} alt={label} fill />
          </div>
        </Button>
      ))}
    </div>
  );
}

export default SelectGoal;
