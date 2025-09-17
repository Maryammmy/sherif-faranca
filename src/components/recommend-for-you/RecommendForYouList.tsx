"use client";

import { useRecommendForYou } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";
import { IRecommendedForYou } from "@/src/interfaces/main/home";
import RecommendForYouCard from "./Card";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";

function RecommendForYorList() {
  const { data } = useRecommendForYou();
  const recommendedForYouList: IRecommendedForYou[] = data?.data?.items;
  return (
    <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5">
      {!data ? (
        <SkeletonCard count={5} />
      ) : recommendedForYouList?.length ? (
        recommendedForYouList.map((recommendForYou) => (
          <RecommendForYouCard
            key={recommendForYou?.id}
            recommendForYou={recommendForYou}
          />
        ))
      ) : (
        <EmptyStatePage message="No recommended for you found" />
      )}
    </div>
  );
}

export default RecommendForYorList;
