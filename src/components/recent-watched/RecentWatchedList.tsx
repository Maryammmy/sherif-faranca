"use client";

import { useRecentWatched } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";
import { IRecentWatched } from "@/src/interfaces/main/home";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";
import RecentWatchedCard from "./Card";
import { Button } from "../ui/Button";
import Loader from "../loader/Loader";
import { cn } from "@/src/lib/utils";
import { useTranslations } from "next-intl";

function RecentWatchedList() {
  const t = useTranslations("recentWatched");
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useRecentWatched();

  // دمج كل الـ pages في Array واحد
  const recentWatchedList: IRecentWatched[] | undefined = data?.pages.flatMap(
    (page) => page?.data?.items
  );

  return (
    <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5">
      {!data ? (
        <SkeletonCard count={5} />
      ) : recentWatchedList?.length ? (
        <>
          {recentWatchedList.map((recentWatched) => (
            <RecentWatchedCard
              key={recentWatched?.id}
              recentWatched={recentWatched}
            />
          ))}

          {/* زرار تحميل المزيد */}
          {hasNextPage && (
            <div className="col-span-full flex justify-center">
              <Button
                className={cn(
                  "bg-primary hover:bg-primary/60 px-3 py-2 text-white font-medium rounded-md transition-all duration-300",
                  isFetchingNextPage && "w-[106.7px] px-0"
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
        <EmptyStatePage message={t("noRecentWatchedFound")} />
      )}
    </div>
  );
}

export default RecentWatchedList;
