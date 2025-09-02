import { Button } from "@/src/components/ui/Button";
import { ISubscriptionPlan } from "@/src/interfaces/main/subscription-plans";
import { cn } from "@/src/lib/utils";
import { Check } from "lucide-react";

interface IProps {
  subscriptionPlan: ISubscriptionPlan;
}

function SubscriptionPlanCard({ subscriptionPlan }: IProps) {
  const { title, price, content } = subscriptionPlan;
  const premiumPlan = title === "Premium Plan";
  return (
    <div
      className={cn(
        "p-3 rounded-lg flex flex-col gap-8",
        premiumPlan ? "bg-primary" : "bg-white border border-primary"
      )}
    >
      <div className="flex-1 flex flex-col gap-10">
        <div className="flex flex-col gap-0.5 items-center">
          <h2
            className={cn(
              "font-bold",
              premiumPlan ? "text-white" : "text-neutral-800"
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-2xl font-bold",
              premiumPlan ? "text-white" : "text-primary"
            )}
          >
            {price}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {content?.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className={cn(
                  "shrink-0",
                  premiumPlan ? "text-white" : "text-primary"
                )}
              >
                <Check size={20} />
              </span>
              <p
                className={cn(
                  "font-medium text-sm",
                  premiumPlan ? "text-white" : "text-gray-700"
                )}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button
          className={cn(
            "w-full p-2 rounded-md font-medium",
            premiumPlan ? "bg-white text-primary" : "bg-primary text-white"
          )}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default SubscriptionPlanCard;
