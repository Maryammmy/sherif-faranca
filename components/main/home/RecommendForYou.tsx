import RecommendCard from "@/components/main/home/RecommendCard";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface IProps {
  length?: number;
  screen3xl?: boolean;
}
export default function RecommendForYou({ length = 4, screen3xl }: IProps) {
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
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-5",
          screen3xl && "3xl:grid-cols-5"
        )}
      >
        {Array.from({ length: length }).map((_, index) => (
          <RecommendCard key={index} />
        ))}
      </div>
    </div>
  );
}
