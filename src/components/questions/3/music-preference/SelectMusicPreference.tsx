import { Button } from "@/src/components/ui/Button";
import { ISupQuestion } from "@/src/interfaces/questions";
import { cn } from "@/src/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface IProps {
  musicPreferences: ISupQuestion[];
  selectedMusicPreferences: number[];
  toggleMusic: (id: number) => void;
}
function SelectMusicPreference({
  musicPreferences,
  selectedMusicPreferences,
  toggleMusic,
}: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 pt-5">
      {musicPreferences.map(({ id, name }) => (
        <Button
          key={id}
          onClick={() => toggleMusic(id)}
          className={cn(
            "bg-white relative flex flex-col gap-3 p-6 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
            selectedMusicPreferences.includes(id) &&
              "border-2 border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedMusicPreferences.includes(id) && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <span className="text-start text-secondary font-medium text-xl">
            {name}
          </span>
        </Button>
      ))}
    </div>
  );
}

export default SelectMusicPreference;
