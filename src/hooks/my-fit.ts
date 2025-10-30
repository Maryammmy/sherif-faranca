import { useCustomInfiniteQuery, useCustomQuery } from "./useCustomQuery";
import {
  myFitAPI,
  myFitCalories,
  myFitFavAPI,
  myFitMonthHistory,
  myFitTodayHistory,
  myFitWeekHistory,
} from "@/src/services/queries/my-fit";

export function useMyFit() {
  return useCustomQuery(["myFit"], myFitAPI);
}
export function useMyFitFav() {
  return useCustomQuery(["myFitFav"], myFitFavAPI);
}
export function useMyFitCalories() {
  return useCustomQuery(["myFitCalories"], myFitCalories);
}

export function useMyFitTrainingHistory(time: string = "today") {
  // Pick the correct API function based on the selected time range
  const getApi = (page: number) => {
    switch (time) {
      case "thisWeek":
        return myFitWeekHistory(page);
      case "thisMonth":
        return myFitMonthHistory(page);
      default:
        return myFitTodayHistory(page);
    }
  };

  return useCustomInfiniteQuery(
    ["myFitTrainingHistory", time], // dynamic key per time range
    async ({ pageParam = 1 }) => {
      return getApi(pageParam);
    },
    {
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
