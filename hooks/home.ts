import { homeAPI } from "@/services/home";
import { useCustomQuery } from ".";

export function useHome() {
  return useCustomQuery(["home"], homeAPI);
}
