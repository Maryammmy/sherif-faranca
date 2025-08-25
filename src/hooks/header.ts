import { headerAPI } from "@/src/services/queries/header";
import { useCustomQuery } from ".";

export function useHeader() {
  return useCustomQuery(["header"], headerAPI);
}
