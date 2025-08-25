import { filtersAPI } from "@/src/services/queries/filters";
import { useCustomQuery } from ".";

export function useFilters() {
  return useCustomQuery(["filters"], filtersAPI);
}
