"use client";

import RecentWatchedCard from "@/src/components/main/home/RecentWatchedCard";
import { useHome } from "@/src/hooks";
import { IRecentWatched } from "@/src/interfaces/main/home";
import SwiperSlider from "../../ui/SwiperSlider";
import { HomeBreakpoints } from "@/src/data";
import Link from "next/link";

export default function RecentWatched() {
  const { data } = useHome();
  const recentVideos: IRecentWatched[] = data?.data?.recentVideos;
  if (!recentVideos?.length) return null;
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-800 text-xl font-semibold">Recent Watched</h2>
        <Link
          href="/recent-watched"
          className="border-b border-secondary text-secondary font-medium"
        >
          <span>View All</span>
        </Link>
      </div>
      <div className="py-5">
        {recentVideos?.length > 0 && (
          <SwiperSlider
            slides={recentVideos?.map((recentVideo) => (
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
        )}
      </div>
    </div>
  );
}
