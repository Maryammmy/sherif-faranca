"use client";

import { useDiscoverPrograms } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";
import { IDiscoverProgram } from "@/src/interfaces/main/home";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";
import DiscoverProgramCard from "./Card";

function DiscoverProgramList() {
  const { data } = useDiscoverPrograms();
  const discoverProgramList: IDiscoverProgram[] = data?.data?.items;
  return (
    <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5">
      {!data ? (
        <SkeletonCard count={5} />
      ) : discoverProgramList?.length ? (
        discoverProgramList.map((discoverProgram) => (
          <DiscoverProgramCard
            key={discoverProgram?.id}
            discoverProgram={discoverProgram}
          />
        ))
      ) : (
        <EmptyStatePage message="No discover programs found" />
      )}
    </div>
  );
}

export default DiscoverProgramList;
