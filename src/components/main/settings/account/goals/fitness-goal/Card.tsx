import { Button } from "@/src/components/ui/Button";
import { IQuestion } from "@/src/interfaces/questions";
import { cn } from "@/src/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "@/src/components/ui/Image";

interface IProps {
  goal: IQuestion;
  selectedGoal: number | null;
  handleSelectGoal: (goal: number) => void;
}

function FitnessGoalCard({ goal, selectedGoal, handleSelectGoal }: IProps) {
  const { id, imageUrl, name } = goal;

  return (
    <Button
      onClick={() => handleSelectGoal(id)}
      className={cn(
        "bg-white relative flex flex-col sm:flex-row gap-4 sm:gap-2 sm:justify-between items-center p-4 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
        selectedGoal === id && "border-2 border-primary ring-2 ring-primary/30"
      )}
    >
      {selectedGoal === id && (
        <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
      )}
      <h5 className="text-center text-gray-700 font-bold text-base sm:text-lg capitalize">
        {name}
      </h5>
      <div className="w-40 h-[150px] relative rounded-2xl overflow-hidden">
        <Image src={imageUrl} alt={name} fill />
      </div>
    </Button>
  );
}

export default FitnessGoalCard;
