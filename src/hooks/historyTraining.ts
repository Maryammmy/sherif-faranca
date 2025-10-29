import {
  workoutsHistoryMonthAPI,
  workoutsHistoryTodayAPI,
  workoutsHistoryWeekAPI,
} from "../services/queries/workouts-program";
import { useCustomQuery } from "./useCustomQuery";

export function useHistoryTraining(time: string = "today") {
  const api =
    time === "thisWeek"
      ? workoutsHistoryWeekAPI
      : time === "thisMonth"
      ? workoutsHistoryMonthAPI
      : workoutsHistoryTodayAPI;

  return useCustomQuery(["historyTraining", time], api, {
    enabled: !!time,
  });
}
