import { Button } from "@/src/components/ui/Button";
import { IFitnessLevel } from "@/src/interfaces/questions";
import { cn } from "@/src/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface IProps {
  fitnessLevels: IFitnessLevel[];
  selectedFitnessLevel: number | null;
  handleSelectFitnessLevel: (id: number) => void;
}
function SelectFitnessLevel({
  fitnessLevels,
  selectedFitnessLevel,
  handleSelectFitnessLevel,
}: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
      {fitnessLevels?.map(({ id, name, description, imageUrl }) => (
        <Button
          key={id}
          onClick={() => handleSelectFitnessLevel(id)}
          className={cn(
            "bg-white relative flex flex-col gap-3 p-6 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
            selectedFitnessLevel === id &&
              "border-2 border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedFitnessLevel === id && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <div className="flex gap-2 items-center">
            <div className="relative w-8 h-8 shrink-0">
              <Image src={imageUrl} alt={name} fill />
            </div>
            <h5 className="capitalize text-secondary font-medium text-xl">
              {name}
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
