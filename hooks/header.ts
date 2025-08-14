import { headerAPI } from "@/services/header";
import { useCustomQuery } from ".";

export function useHeader() {
  return useCustomQuery(["header"], headerAPI);
}
