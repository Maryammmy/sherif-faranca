"use client";
import DiscoverProgramsCard from "@/src/components/main/home/DiscoverProgramsCard";
import { Button } from "@/src/components/ui/Button";
import { useHome } from "@/src/hooks";
import { IDiscoverProgram } from "@/src/interfaces/main/home";
import { SingleSkeletonCard } from "../../skeleton/Card";
import { HomeBreakpoints } from "@/src/data";
import SwiperSlider from "../../ui/SwiperSlider";
import { EmptyState } from "../../ui/empty-state/EmptyState";

export default function DiscoverPrograms() {
  const { data } = useHome();
  const discoverPrograms: IDiscoverProgram[] = data?.data?.discoverProgram;
  return (
    <div>
      {data && (
        <div className="flex items-center justify-between">
          <h2 className="text-gray-800 text-xl font-semibold">
            Discover Programs
          </h2>
          <Button className="border-b border-secondary text-secondary font-medium">
            <span>View All</span>
          </Button>
        </div>
      )}
      <div className="py-5">
        {!data ? (
          <SwiperSlider
            slides={Array.from({ length: 4 }).map((_, index) => (
              <SingleSkeletonCard key={index} />
            ))}
            spaceBetween={20}
            pagination={false}
            breakpoints={HomeBreakpoints}
            loop={false}
          />
        ) : discoverPrograms?.length ? (
          <SwiperSlider
            slides={discoverPrograms?.map((discoverProgram) => (
              <DiscoverProgramsCard
                key={discoverProgram?.id}
                discoverProgram={discoverProgram}
              />
            ))}
            spaceBetween={20}
            pagination={false}
            breakpoints={HomeBreakpoints}
            loop={false}
          />
        ) : (
          <EmptyState message="No discover programs found" />
        )}
      </div>
    </div>
  );
}
