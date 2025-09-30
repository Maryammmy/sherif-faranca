import { Button } from "@/src/components/ui/Button";
import { ISubscription } from "@/src/interfaces";
import { cn } from "@/src/lib/utils";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

interface IProps {
  subscriptionPlan: ISubscription;
}

function SubscriptionPlanCard({ subscriptionPlan }: IProps) {
  const t = useTranslations("price");
  const { planName, features, beforePrice, afterPrice, isSpecialOffer } =
    subscriptionPlan;
  const premiumPlan = planName === "Premium Plan";

  const showSpecialOffer =
    isSpecialOffer && beforePrice && afterPrice && beforePrice !== afterPrice;

  return (
    <div
      className={cn(
        "p-3 rounded-lg flex flex-col gap-8 min-h-[300px] lg:min-h-[350px]",
        premiumPlan ? "bg-primary" : "bg-white border border-primary"
      )}
    >
      <div className="flex-1 flex flex-col gap-10">
        {/* Title + Price */}
        <div className="flex flex-col gap-0.5 items-center">
          <h2
            className={cn(
              "font-bold",
              premiumPlan ? "text-white" : "text-neutral-800"
            )}
          >
            {planName}
          </h2>

          {/* الأسعار */}
          <div className="flex items-center gap-2">
            {showSpecialOffer && (
              <p
                className={cn(
                  "text-lg font-medium line-through",
                  premiumPlan ? "text-gray-200" : "text-secondary"
                )}
              >
                {beforePrice} {t("egp")}
              </p>
            )}

            <p
              className={cn(
                "text-2xl font-bold",
                premiumPlan ? "text-white" : "text-primary"
              )}
            >
              {afterPrice ?? beforePrice} {t("egp")}
            </p>
          </div>
        </div>

        {/* المميزات */}
        <div className="flex flex-col gap-3">
          {features?.map((feature, index) => (
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
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* زرار */}
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
