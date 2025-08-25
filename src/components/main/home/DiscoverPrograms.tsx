"use client";
import DiscoverProgramsCard from "@/src/components/main/home/DiscoverProgramsCard";
import { Button } from "@/src/components/ui/Button";
import { useHome } from "@/src/hooks";
import { IDiscoverProgram } from "@/src/interfaces/main/home";

export default function DiscoverPrograms() {
  const { data } = useHome();
  const discoverPrograms: IDiscoverProgram[] = data?.data?.discoverProgram;
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
      {data && discoverPrograms?.length && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-5">
          {discoverPrograms?.map((discoverProgram) => (
            <DiscoverProgramsCard
              key={discoverProgram?.id}
              discoverProgram={discoverProgram}
            />
          ))}
        </div>
      )}
    </div>
  );
}
