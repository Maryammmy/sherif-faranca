import { Button } from "@/src/components/ui/Button";
import { ISubscription } from "@/src/interfaces";
import { cn } from "@/src/lib/utils";
import { useTranslations } from "next-intl";

interface IProps {
  subscriptionPlan: ISubscription;
}

function SubscriptionPlanCard({ subscriptionPlan }: IProps) {
  const t = useTranslations();
  const { planName, beforePrice, afterPrice, isSpecialOffer, description } =
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
        {/* العنوان + السعر */}
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
                {beforePrice} {t("price.egp")}
              </p>
            )}

            <p
              className={cn(
                "text-2xl font-bold",
                premiumPlan ? "text-white" : "text-primary"
              )}
            >
              {afterPrice ?? beforePrice} {t("price.egp")}
            </p>
          </div>
        </div>

        {/* الوصف بدل الـ features */}
        {/* الوصف بدل الـ features */}
        {description && (
          <div
            className={cn(
              "leading-relaxed",
              // قواعد مشتركة للـ ul/li
              "[&_ul]:pl-5 [&_ul]:list-disc [&_ul]:marker:text-primary [&_li]:my-1",
              premiumPlan
                ? "text-white [&_ul]:marker:text-white"
                : "text-gray-700"
            )}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>

      {/* الزر */}
      <div>
        <Button
          className={cn(
            "w-full p-2 rounded-md font-medium",
            premiumPlan ? "bg-white text-primary" : "bg-primary text-white"
          )}
        >
          {t("subscription.getStarted")}
        </Button>
      </div>
    </div>
  );
}

export default SubscriptionPlanCard;
