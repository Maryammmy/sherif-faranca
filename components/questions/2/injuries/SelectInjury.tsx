import { Button } from "@/components/ui/Button";
import { IQuestion } from "@/interfaces/questions";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface IProps {
  injuries: IQuestion[];
  selectedInjuries: number[];
  toggleInjury: (id: number) => void;
}

function SelectInjury({ injuries, selectedInjuries, toggleInjury }: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pt-5">
      {injuries?.map(({ id, name, imageUrl }) => (
        <Button
          key={id}
          onClick={() => toggleInjury(id)}
          className={cn(
            "bg-white relative flex flex-col gap-2 justify-center items-center p-4 sm:p-6 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
            selectedInjuries.includes(id) &&
              "border-2 border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedInjuries.includes(id) && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <div className="relative w-12 h-12 rounded-md overflow-hidden">
            <Image src={imageUrl} alt={name} fill />
          </div>
          <h5 className="text-center text-secondary font-medium text-xl">
            {name}
          </h5>
        </Button>
      ))}
    </div>
  );
}

export default SelectInjury;
