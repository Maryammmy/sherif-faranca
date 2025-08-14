"use client";
import RecentWatchedCard from "@/components/main/home/RecentWatchedCard";
import { Button } from "@/components/ui/Button";
import { useHome } from "@/hooks";
import { IRecentWatched } from "@/interfaces/main/home";

export default function RecentWatched() {
  const { data } = useHome();
  const recentVideos: IRecentWatched[] = data?.data?.recentVideos;
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-800 text-xl font-semibold">Recent Watched</h2>
        <Button className="border-b border-secondary text-secondary font-medium">
          <span>View All</span>
        </Button>
      </div>
      {data && recentVideos?.length && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-5">
          {recentVideos?.map((recentVideo) => (
            <RecentWatchedCard
              key={recentVideo?.id}
              recentVideo={recentVideo}
            />
          ))}
        </div>
      )}
    </div>
  );
}
