"use client";
import Button from "@/components/ui/Button";
import { times } from "@/data/questions";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

function SelectIdealBodyTime() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pt-5">
      {times.map(({ icon: Icon, label }) => (
        <Button
          key={label}
          onClick={() => handleSelectTime(label)}
          className={cn(
            "bg-white relative flex flex-col gap-3 justify-center items-center p-4 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
            selectedTime === label &&
              "border-2 border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedTime === label && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <span>
            <Icon className="w-8 h-8 text-primary" />
          </span>
          <h5 className="text-center text-secondary font-medium text-xl">
            {label}
          </h5>
        </Button>
      ))}
    </div>
  );
}

export default SelectIdealBodyTime;
