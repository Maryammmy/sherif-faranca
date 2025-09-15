"use client";

import RecentWatchedCard from "@/src/components/main/home/RecentWatchedCard";
import { Button } from "@/src/components/ui/Button";
import { useHome } from "@/src/hooks";
import { IRecentWatched } from "@/src/interfaces/main/home";
import { SingleSkeletonCard } from "../../skeleton/Card";
import SwiperSlider from "../../ui/SwiperSlider";
import { HomeBreakpoints } from "@/src/data";
import { EmptyState } from "../../ui/empty-state/EmptyState";

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
        ) : recentVideos?.length ? (
          <SwiperSlider
            slides={recentVideos.map((recentVideo) => (
              <RecentWatchedCard
                key={recentVideo?.id}
                recentVideo={recentVideo}
              />
            ))}
            spaceBetween={20}
            pagination={false}
            breakpoints={HomeBreakpoints}
            loop={false}
          />
        ) : (
          <EmptyState message="No recent watched found" />
        )}
      </div>
    </div>
  );
}
