import { subscriptionAPI } from "../services/queries/subscription";
import { useCustomQuery } from "./useCustomQuery";

export function useSubscription(type = "monthly") {
  return useCustomQuery(["subscription", type], () => subscriptionAPI(type));
}
