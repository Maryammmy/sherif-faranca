"use server";
import { IApplyFilters } from "@/src/interfaces/filters";
import { postServerData } from "../server";

export const applyFiltersAPI = async (payload: IApplyFilters) => {
  const data = await postServerData(
    "/api/WorkoutProgram/apply-filter",
    payload
  );
  return data;
};
