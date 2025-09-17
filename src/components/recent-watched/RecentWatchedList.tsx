"use client";

import { useRecentWatched } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";
import { IRecentWatched } from "@/src/interfaces/main/home";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";
import RecentWatchedCard from "./Card";

function RecentWatchedList() {
  const { data } = useRecentWatched();
  const recentWatchedList: IRecentWatched[] = data?.data?.items;
  return (
    <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5">
      {!data ? (
        <SkeletonCard count={5} />
      ) : recentWatchedList?.length ? (
        recentWatchedList.map((recentWatched) => (
          <RecentWatchedCard
            key={recentWatched?.id}
            recentWatched={recentWatched}
          />
        ))
      ) : (
        <EmptyStatePage message="No recent watched found" />
      )}
    </div>
  );
}

export default RecentWatchedList;
