"use client";

import { useDiscoverPrograms } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";
import { IDiscoverProgram } from "@/src/interfaces/main/home";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";
import DiscoverProgramCard from "./Card";
import Loader from "../loader/Loader";
import { Button } from "../ui/Button";

function DiscoverProgramList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useDiscoverPrograms();

  const discoverProgramList: IDiscoverProgram[] | undefined =
    data?.pages.flatMap((page) => page?.data?.items);
  return (
    <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5">
      {!data ? (
        <SkeletonCard count={5} />
      ) : discoverProgramList?.length ? (
        <>
          {discoverProgramList.map((discoverProgram) => (
            <DiscoverProgramCard
              key={discoverProgram?.id}
              discoverProgram={discoverProgram}
            />
          ))}
          {/* زرار تحميل المزيد */}
          {hasNextPage && (
            <div className="col-span-full flex justify-center">
              <Button
                className="bg-primary w-28 p-2 text-white font-medium rounded-md"
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? <Loader /> : "Show More"}
              </Button>
            </div>
          )}
        </>
      ) : (
        <EmptyStatePage message="No discover programs found" />
      )}
    </div>
  );
}

export default DiscoverProgramList;
