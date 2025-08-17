"use server";

import { IApplyFilters } from "@/interfaces/filters";
import { getServerData, postServerData } from "./server";

export const filtersAPI = async () => {
  const data = await getServerData("/api/WorkoutProgram/filters");
  return data;
};
export const applyFiltersAPI = async (payload: IApplyFilters) => {
  const data = await postServerData(
    "/api/WorkoutProgram/apply-filter",
    payload
  );
  return data;
};
