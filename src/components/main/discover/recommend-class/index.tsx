import { Button } from "@/src/components/ui/Button";
import RecommendClassCard from "./Card";

function RecommendClass() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-700 text-lg font-semibold capitalize">
          Recommend Class
        </h2>
        <Button className="border-b border-secondary text-secondary font-medium">
          <span>View All</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <RecommendClassCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default RecommendClass;
