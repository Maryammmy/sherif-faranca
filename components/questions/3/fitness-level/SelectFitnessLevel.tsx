"use client";
import Button from "@/components/ui/Button";
import { fitnessLevels } from "@/data/questions";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function SelectFitnessLevel() {
  const [selectedFitnessLevel, setSelectedFitnessLevel] = useState<
    string | null
  >(null);
  const handleSelectFitnessLevel = (fitnessLevel: string) => {
    setSelectedFitnessLevel(fitnessLevel);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
      {fitnessLevels.map(({ src, title, description }) => (
        <Button
          key={title}
          onClick={() => handleSelectFitnessLevel(title)}
          className={cn(
            "bg-white relative flex flex-col gap-3 p-4 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
            selectedFitnessLevel === title &&
              "border-2 border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedFitnessLevel === title && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <div className="flex gap-2 items-center">
            <div className="relative w-8 h-8 shrink-0">
              <Image src={`/${src}.svg`} alt={title} fill />
            </div>
            <h5 className="text-center capitalize text-secondary font-medium text-xl">
              {title}
            </h5>
          </div>
          <div className="max-w-3xs">
            <p className="text-start text-secondary font-medium">
              {description}
            </p>
          </div>
        </Button>
      ))}
    </div>
  );
}

export default SelectFitnessLevel;
