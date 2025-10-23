import { PAGE_SIZE } from "@/src/constants";
import { getServerData } from "../server";
import { IDiscoverFiltersWithPagination } from "@/src/interfaces/main/discover";
import { buildQueryString } from "@/src/lib/utils";

export const discoverWorkoutsAPI = async () => {
  const data = await getServerData("/api/Discover/Discover-WorkoutProgram");
  return data;
};
export const discoverVideosAPI = async () => {
  const data = await getServerData("/api/Discover/Discover-Videos");
  return data;
};
export const discoverFilterWorkoutsAPI = async (
  filters: IDiscoverFiltersWithPagination
) => {
  const queryString = buildQueryString({
    FilterBodyFocsAreaIds: filters.focusAreaIds,
    MinHours: filters.minHours,
    MaxHours: filters.maxHours,
    LevelId: filters.levelId,
    pageNumber: filters.page,
    pageSize: PAGE_SIZE,
  });

  const data = await getServerData(
    `/api/Discover/filter-WorkoutProgram?${queryString}`
  );
  return data;
};
export const discoverFilterVideosAPI = async (
  filters: IDiscoverFiltersWithPagination
) => {
  const queryString = buildQueryString({
    FilterBodyFocsAreaIds: filters.focusAreaIds,
    MinHours: filters.minHours,
    MaxHours: filters.maxHours,
    LevelId: filters.levelId,
    pageNumber: filters.page,
    pageSize: PAGE_SIZE,
  });

  const data = await getServerData(
    `/api/Discover/filter-Videos?${queryString}`
  );
  return data;
};
