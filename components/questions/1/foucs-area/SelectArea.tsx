"use client";
import Button from "@/components/ui/Button";
import { areas } from "@/data/questions";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function SelectArea() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleArea = (area: string) => {
    setSelected((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-10 pt-5">
      {/* Selection List */}
      <div className="flex flex-col gap-4">
        {areas.map((area) => (
          <Button
            key={area}
            onClick={() => toggleArea(area)}
            className={cn(
              "w-40 px-2 py-3 bg-white font-medium rounded-md border text-gray-700 transition-all duration-300 ease-in-out",
              selected.includes(area) &&
                "flex justify-between border-2 border-primary ring-2 ring-primary/30"
            )}
          >
            {area}
            {selected.includes(area) && (
              <CheckCircle2 className="text-primary w-6 h-6 transition-opacity opacity-100" />
            )}
          </Button>
        ))}
      </div>
      {/* Image + Glow Overlays */}
      <div className="relative w-[300px] h-[350px]">
        <Image src="/male.png" alt="body" fill className="object-cover" />
        {/* SHOULDER */}
        {selected.includes("Shoulder") && (
          <>
            <div className="absolute left-[104px] top-[70px] w-[15px] h-[15px] rounded-full shadow-[0_0_60px_35px_rgba(255,0,0,0.7)]" />
            <div className="absolute right-[110px] top-[70px] w-[15px] h-[15px] rounded-full shadow-[0_0_60px_35px_rgba(255,0,0,0.7)]" />
          </>
        )}

        {/* ARM */}
        {selected.includes("Arm") && (
          <>
            <div className="absolute left-[95px] top-[100px] w-[15px] h-[15px] rounded-full shadow-[0_0_60px_35px_rgba(255,0,0,0.7)]" />
            <div className="absolute right-[102px] top-[100px] w-[15px] h-[15px] rounded-full shadow-[0_0_60px_35px_rgba(255,0,0,0.7)]" />
          </>
        )}
        {/* CHEST */}
        {selected.includes("Chest") && (
          <>
            <div className="absolute left-[120px] top-[90px] w-[15px] h-[15px] rounded-full shadow-[0_0_70px_40px_rgba(255,0,0,0.7)]" />
            <div className="absolute right-[125px] top-[90px] w-[15px] h-[15px] rounded-full shadow-[0_0_70px_40px_rgba(255,0,0,0.7)]" />
          </>
        )}
        {/* ABS */}
        {selected.includes("Abs") && (
          <div className="absolute left-[140px] top-[150px] w-[15px] h-[15px] rounded-full shadow-[0_0_70px_40px_rgba(255,0,0,0.7)]" />
        )}
        {/* LEG */}
        {selected.includes("Leg") && (
          <>
            <div className="absolute left-[109px] top-[240px] w-[15px] h-[15px] rounded-full shadow-[0_0_70px_40px_rgba(255,0,0,0.7)]" />
            <div className="absolute right-[117px] top-[240px] w-[15px] h-[15px] rounded-full shadow-[0_0_70px_40px_rgba(255,0,0,0.7)]" />
          </>
        )}
        {/* FULL BODY */}
        {selected.includes("Full Body") && (
          <div className="absolute left-[120px] top-[160px] shadow-[0_0_200px_100px_rgba(255,0,0,0.7)]" />
        )}
      </div>
    </div>
  );
}
