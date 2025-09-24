"use client";

import { useRecommendForYou } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";
import { IRecommendedForYou } from "@/src/interfaces/main/home";
import RecommendForYouCard from "./Card";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";
import { Button } from "../ui/Button";
import Loader from "../loader/Loader";

function RecommendForYorList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useRecommendForYou();

  const recommendList: IRecommendedForYou[] | undefined = data?.pages.flatMap(
    (page) => page?.data?.items
  );
  console.log(recommendList);
  return (
    <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5">
      {!data ? (
        <SkeletonCard count={5} />
      ) : recommendList?.length ? (
        <>
          {recommendList?.map((item) => (
            <RecommendForYouCard key={item?.id} recommendForYou={item} />
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
        <EmptyStatePage message="No recommendations found" />
      )}
    </div>
  );
}

export default RecommendForYorList;
