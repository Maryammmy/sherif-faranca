import { getHomeAPI } from "@/services/home";
import { useCustomQuery } from ".";

export function useHome() {
  return useCustomQuery(["home"], getHomeAPI);
}
