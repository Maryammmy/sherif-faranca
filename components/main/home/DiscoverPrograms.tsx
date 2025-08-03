import DiscoverProgramsCard from "@/components/main/home/DiscoverProgramsCard";
import { Button } from "@/components/ui/Button";

export default function DiscoverPrograms() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-800 text-xl font-semibold">
          Discover Programs
        </h2>
        <Button className="border-b border-secondary text-secondary font-medium">
          <span>View All</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <DiscoverProgramsCard key={index} id={index + 1} />
        ))}
      </div>
    </div>
  );
}
