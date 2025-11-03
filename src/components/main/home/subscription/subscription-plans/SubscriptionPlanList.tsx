import { SkeletonCard } from "@/src/components/skeleton/Card";
import SubscriptionPlanCard from "./Card";
import { useSubscription } from "@/src/hooks/subscription";
import { ISubscription } from "@/src/interfaces";
import { EmptyStatePage } from "@/src/components/ui/empty-state/EmptyStatePage";
import { Button } from "@/src/components/ui/Button";
import Loader from "@/src/components/loader/Loader";
import { cn } from "@/src/lib/utils";
import { useTranslations } from "next-intl";

interface IProps {
  type: string;
}

function SubscriptionPlanList({ type }: IProps) {
  const t = useTranslations("subscription");
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSubscription(type);

  const subscriptionPlans: ISubscription[] | undefined = data?.pages.flatMap(
    (page) => page?.data?.items
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {!data ? (
          <SkeletonCard count={3} className="h-[300px] lg:h-[350px]" />
        ) : subscriptionPlans?.length ? (
          subscriptionPlans?.map((subscriptionPlan) => (
            <SubscriptionPlanCard
              subscriptionPlan={subscriptionPlan}
              key={subscriptionPlan?.id}
            />
          ))
        ) : (
          <EmptyStatePage message={t("subscriptionPlansNotFound")} />
        )}
      </div>

      {/* ✅ Show More button */}
      {hasNextPage && (
        <div className="flex justify-center pt-2">
          <Button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className={cn(
              "px-3 py-2 bg-[#3e1492] text-white font-medium rounded-md hover:bg-[#2b0e6e] transition-colors duration-200"
            )}
          >
            {isFetchingNextPage ? <Loader /> : t("showMore")}
          </Button>
        </div>
      )}
    </div>
  );
}

export default SubscriptionPlanList;
