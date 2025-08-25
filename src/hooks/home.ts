import { homeAPI } from "@/src/services/queries/home";
import { useCustomQuery } from ".";

export function useHome() {
  return useCustomQuery(["home"], homeAPI);
}
