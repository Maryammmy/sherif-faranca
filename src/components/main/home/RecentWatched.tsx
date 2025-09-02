"use client";

import RecentWatchedCard from "@/src/components/main/home/RecentWatchedCard";
import { Button } from "@/src/components/ui/Button";
import { useHome } from "@/src/hooks";
import { IRecentWatched } from "@/src/interfaces/main/home";
import { SkeletonCard } from "../../skeleton/Card";

export default function RecentWatched() {
  const { data } = useHome();
  const recentVideos: IRecentWatched[] = data?.data?.recentVideos;

  return (
    <div>
      {data && (
        <div className="flex items-center justify-between">
          <h2 className="text-gray-800 text-xl font-semibold">
            Recent Watched
          </h2>
          <Button className="border-b border-secondary text-secondary font-medium">
            <span>View All</span>
          </Button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-5">
        {!data ? (
          <SkeletonCard count={4} />
        ) : recentVideos?.length ? (
          recentVideos.map((recentVideo) => (
            <RecentWatchedCard
              key={recentVideo?.id}
              recentVideo={recentVideo}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-secondary font-medium">
            No recent watched found
          </p>
        )}
      </div>
    </div>
  );
}
