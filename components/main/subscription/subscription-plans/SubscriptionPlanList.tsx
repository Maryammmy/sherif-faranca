import { subscriptionPlans } from "@/data/main/subscription-plans";
import SubscriptionPlanCard from "./Card";

function SubscriptionPlanList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {subscriptionPlans.map((subscriptionPlan) => (
        <SubscriptionPlanCard
          subscriptionPlan={subscriptionPlan}
          key={subscriptionPlan.title}
        />
      ))}
    </div>
  );
}

export default SubscriptionPlanList;
