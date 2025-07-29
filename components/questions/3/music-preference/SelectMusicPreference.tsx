"use client";
import Button from "@/components/ui/Button";
import { musicPreference } from "@/data/questions";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

function SelectMusicPreference() {
  const [selectedMusicPreferences, setSelectedMusicPreferences] = useState<
    string[]
  >([]);

  const handleSelectMusicPreference = (musicPreference: string) => {
    setSelectedMusicPreferences((prev) =>
      prev.includes(musicPreference)
        ? prev.filter((m) => m !== musicPreference)
        : [...prev, musicPreference]
    );
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 pt-5">
      {musicPreference.map((music) => (
        <Button
          key={music}
          onClick={() => handleSelectMusicPreference(music)}
          className={cn(
            "bg-white relative flex flex-col gap-3 p-4 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
            selectedMusicPreferences.includes(music) &&
              "border-2 border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedMusicPreferences.includes(music) && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <h5 className="text-start text-secondary font-medium text-xl">
            {music}
          </h5>
        </Button>
      ))}
    </div>
  );
}

export default SelectMusicPreference;
