import { Button } from "@/src/components/ui/Button";
import { IQuestion } from "@/src/interfaces/questions";
import { cn } from "@/src/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface IProps {
  goals: IQuestion[];
  selectedGoal: number | null;
  handleSelectGoal: (id: number) => void;
}
function SelectGoal({ goals, selectedGoal, handleSelectGoal }: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
      {goals?.map(({ id, name, imageUrl }) => (
        <Button
          key={id}
          onClick={() => handleSelectGoal(id)}
          className={cn(
            "bg-white relative flex flex-col sm:flex-row gap-4 sm:justify-between items-center px-6 py-8 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
            selectedGoal === id &&
              "border-2 border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedGoal === id && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <h5 className="text-center text-gray-700 font-bold text-xl sm:text-base xl:text-xl capitalize">
            {name}
          </h5>
          <div className="w-50 sm:w-30 md:w-40 h-[150px] shrink-0 relative rounded-2xl overflow-hidden">
            <Image src={imageUrl} alt={name} fill />
          </div>
        </Button>
      ))}
    </div>
  );
}

export default SelectGoal;
