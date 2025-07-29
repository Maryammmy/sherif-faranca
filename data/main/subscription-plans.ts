import { ISubscriptionPlan } from "@/interfaces/main/subscription-plans";

export const subscriptionPlans: ISubscriptionPlan[] = [
  {
    title: "Basic plan",
    price: "$19/mo",
    content: [
      "All Free Features",
      "Personalized Workout Plane",
      "Progress Tracking & Analytics",
      "75% Ads Free Experience",
    ],
  },
  {
    title: "Premium Plan",
    price: "$40/mo",
    content: [
      "All Free Features",
      "Personalized Workout Plane",
      "Personal Training Session",
      "Progress Tracking & Analytics",
      "Access to Wellness Programs",
    ],
  },
  {
    title: "Elite Plan",
    price: "$60/mo",
    content: [
      "All Fit Core Feature",
      "Monthly Health Report",
      "Smart Device Sync",
      "100% Ads Free",
    ],
  },
];
export const periods = ["Monthly", "Yearly"];
