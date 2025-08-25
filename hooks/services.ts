import {
  aboutUsAPI,
  contactUsAPI,
  privacyPolicyAPI,
} from "@/services/Services";
import { useCustomQuery } from "./useCustomQuery";

export function usePrivacyPolicy() {
  return useCustomQuery(["privacyPolicy"], privacyPolicyAPI);
}
export function useContactUs() {
  return useCustomQuery(["contactUs"], contactUsAPI);
}
export function useAboutUs() {
  return useCustomQuery(["aboutUs"], aboutUsAPI);
}
