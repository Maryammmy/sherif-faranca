import { headerAPI } from "@/services/header";
import { useCustomQuery } from "./useCustomQuery";

export function useHeader() {
  return useCustomQuery(["header"], headerAPI);
}
