"use client";
import RecommendCard from "@/components/main/home/RecommendCard";
import { Button } from "@/components/ui/Button";
import { useHome } from "@/hooks";
import { IRecommendedForYou } from "@/interfaces/main/home";
import { cn } from "@/lib/utils";

interface IProps {
  screen3xl?: boolean;
}
export default function RecommendForYou({ screen3xl }: IProps) {
  const { data } = useHome();
  const recommendedForYou: IRecommendedForYou[] = data?.data?.recommendedForYou;
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-800 text-xl font-semibold">
          Recommend For You
        </h2>
        <Button className="border-b border-secondary text-secondary font-medium">
          <span>View All</span>
        </Button>
      </div>
      {data && recommendedForYou?.length && (
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-5",
            screen3xl && "3xl:grid-cols-5"
          )}
        >
          {recommendedForYou?.map((recommendedForYou) => (
            <RecommendCard
              key={recommendedForYou?.id}
              recommendForYou={recommendedForYou}
            />
          ))}
        </div>
      )}
    </div>
  );
}
