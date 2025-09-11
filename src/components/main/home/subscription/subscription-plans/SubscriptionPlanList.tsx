import { SkeletonCard } from "@/src/components/skeleton/Card";
import SubscriptionPlanCard from "./Card";
import { useSubscription } from "@/src/hooks/subscription";
import { ISubscription } from "@/src/interfaces";
import { EmptyStatePage } from "@/src/components/ui/empty-state/EmptyStatePage";

interface IProps {
  type: string;
}
function SubscriptionPlanList({ type }: IProps) {
  const { data } = useSubscription(type);
  const subscriptionPlans: ISubscription[] = data?.data?.items;
  return (
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
        <EmptyStatePage message="Subscription plans not found" />
      )}
    </div>
  );
}

export default SubscriptionPlanList;
