"use client";
import RecommendCard from "@/src/components/main/home/RecommendCard";
import { Button } from "@/src/components/ui/Button";
import { useHome } from "@/src/hooks";
import { IRecommendedForYou } from "@/src/interfaces/main/home";
import { SingleSkeletonCard } from "../../skeleton/Card";
import SwiperSlider from "../../ui/SwiperSlider";
import { HomeBreakpoints } from "@/src/data";
import { EmptyState } from "../../ui/empty-state/EmptyState";

export default function RecommendForYou() {
  const { data } = useHome();
  const recommendedForYou: IRecommendedForYou[] = data?.data?.recommendedForYou;
  return (
    <div>
      {data && (
        <div className="flex items-center justify-between">
          <h2 className="text-gray-800 text-xl font-semibold">
            Recommend For You
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
        ) : recommendedForYou?.length ? (
          <SwiperSlider
            slides={recommendedForYou?.map((recommendedForYou) => (
              <RecommendCard
                key={recommendedForYou?.id}
                recommendForYou={recommendedForYou}
              />
            ))}
            spaceBetween={20}
            pagination={false}
            breakpoints={HomeBreakpoints}
            loop={false}
          />
        ) : (
          <EmptyState message="No recommended for you found" />
        )}
      </div>
    </div>
  );
}
