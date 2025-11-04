import { SkeletonCard } from "@/src/components/skeleton/Card";
import { Button } from "@/src/components/ui/Button";
import { useRecommendedStepGoal } from "@/src/hooks";
import { IRecommended } from "@/src/interfaces/main/settings/account/goals";
import { cn } from "@/src/lib/utils";

interface IProps {
  recommendedValue: number | null;
  onSelect: (value: number) => void;
}

export default function RecommendedGoalsTab({
  recommendedValue,
  onSelect,
}: IProps) {
  const { data } = useRecommendedStepGoal();
  const recommendedGoals: IRecommended[] = data?.data;

  return (
    <div className="flex flex-col gap-3">
      {!data ? (
        <SkeletonCard count={4} className="h-10" />
      ) : (
        recommendedGoals?.map(({ id, steps, title }) => {
          const isSelected = recommendedValue === id;

          return (
            <Button
              key={id}
              onClick={() => onSelect(id)}
              className={cn(
                "flex justify-between items-center text-sm font-medium border rounded-lg p-3 cursor-pointer transition",
                isSelected
                  ? "bg-primary text-white border-primary scale-[1.02]"
                  : "bg-white text-gray-700 hover:border-primary"
              )}
            >
              <span>{title}</span>
              <span>{steps}</span>
            </Button>
          );
        })
      )}
    </div>
  );
}
