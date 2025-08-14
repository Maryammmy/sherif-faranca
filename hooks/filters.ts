import { filtersAPI } from "@/services/filters";
import { useCustomQuery } from ".";

export function useFilters() {
  return useCustomQuery(["filters"], filtersAPI);
}
