"use client";

import { useDiscoverPrograms } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";
import { IDiscoverProgram } from "@/src/interfaces/main/home";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";
import DiscoverProgramCard from "./Card";
import Loader from "../loader/Loader";
import { Button } from "../ui/Button";
import { cn } from "@/src/lib/utils";
import { useTranslations } from "next-intl";

function DiscoverProgramList() {
  const t = useTranslations("discoverPrograms");
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
                className={cn(
                  "bg-primary hover:bg-primary/60 px-3 py-2 text-white font-medium rounded-md transition-all duration-300"
                )}
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? <Loader /> : t("showMore")}
              </Button>
            </div>
          )}
        </>
      ) : (
        <EmptyStatePage message={t("noDiscoverProgramsFound")} />
      )}
    </div>
  );
}

export default DiscoverProgramList;
