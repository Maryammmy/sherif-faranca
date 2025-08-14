"use client";
import DiscoverProgramsCard from "@/components/main/home/DiscoverProgramsCard";
import { Button } from "@/components/ui/Button";
import { useHome } from "@/hooks";
import { IDiscoverProgram } from "@/interfaces/main/home";

export default function DiscoverPrograms() {
  const { data } = useHome();
  const discoverPrograms: IDiscoverProgram[] = data?.data?.discoverProgram;

  console.log(discoverPrograms);
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
        {discoverPrograms.map((discoverProgram) => (
          <DiscoverProgramsCard
            key={discoverProgram?.id}
            discoverProgram={discoverProgram}
          />
        ))}
      </div>
    </div>
  );
}
