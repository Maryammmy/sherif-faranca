"use client";

import { useRecommendForYou } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";
import { IRecommendedForYou } from "@/src/interfaces/main/home";
import RecommendForYouCard from "./Card";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";
import { Button } from "../ui/Button";
import Loader from "../loader/Loader";
import { cn } from "@/src/lib/utils";
import { useTranslations } from "next-intl";

function RecommendForYorList() {
  const t = useTranslations("recommendedForYou");
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
        <EmptyStatePage message={"noRecommendedForYouFound"} />
      )}
    </div>
  );
}

export default RecommendForYorList;
