import { IDiscoverFilters } from "../interfaces/main/discover";
import {
  discoverFilterVideosAPI,
  discoverFilterWorkoutsAPI,
  discoverVideosAPI,
  discoverWorkoutsAPI,
} from "../services/queries/discover";
import { useCustomInfiniteQuery, useCustomQuery } from "./useCustomQuery";

export function useDiscoverWorkouts(section: string) {
  return useCustomQuery(["discoverWorkouts"], discoverWorkoutsAPI, {
    enabled: section === "workouts",
  });
}
export function useDiscoverVideos(section: string) {
  return useCustomQuery(["discoverVideos"], discoverVideosAPI, {
    enabled: section === "videos",
  });
}
export function useDiscoverFilterWorkouts(filters: IDiscoverFilters) {
  return useCustomInfiniteQuery(
    ["discoverFilterWorkouts", filters],
    async ({ pageParam = 1 }) => {
      return discoverFilterWorkoutsAPI({
        ...filters,
        page: pageParam,
      });
    },
    {
      enabled: filters.section === "workouts",
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const pagination = lastPage?.data?.pagination;
        if (pagination?.pageNumber < pagination?.totalPages) {
          return pagination.pageNumber + 1;
        }
        return undefined;
      },
    }
  );
}
export function useDiscoverFilterVideos(filters: IDiscoverFilters) {
  return useCustomInfiniteQuery(
    ["discoverFilterVideos", filters],
    async ({ pageParam = 1 }) => {
      return discoverFilterVideosAPI({
        ...filters,
        page: pageParam,
      });
    },
    {
      enabled: filters.section === "videos",
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const pagination = lastPage?.data?.pagination;
        if (pagination?.pageNumber < pagination?.totalPages) {
          return pagination.pageNumber + 1;
        }
        return undefined;
      },
    }
  );
}
