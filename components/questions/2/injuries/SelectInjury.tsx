"use client";
import { Button } from "@/components/ui/Button";
import { injuries } from "@/data/questions";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function SelectInjury() {
  const [selectedInjury, setSelectedInjury] = useState<string | null>(null);
  const handleSelectInjury = (injury: string) => {
    setSelectedInjury(injury);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 pt-5">
      {injuries.map(({ src, label }) => (
        <Button
          key={label}
          onClick={() => handleSelectInjury(label)}
          className={cn(
            "bg-white relative flex flex-col gap-2 justify-center items-center p-4 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
            selectedInjury === label &&
              "border-2 border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedInjury === label && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <div className="relative w-12 h-12">
            <Image src={`/${src}.svg`} alt={label} fill />
          </div>
          <h5 className="text-center text-secondary font-medium text-xl">
            {label}
          </h5>
        </Button>
      ))}
    </div>
  );
}

export default SelectInjury;
