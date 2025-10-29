import { useCustomQuery } from ".";
import {
  favWorkoutsAPI,
  recentWorkoutsAPI,
  workoutsHistoryMonthAPI,
  workoutsHistoryTodayAPI,
  workoutsHistoryWeekAPI,
} from "../services/queries/workouts-program";

export function useWorkouts(
  section: string = "history",
  time: string = "today"
) {
  let api;

  if (section === "recent") {
    api = recentWorkoutsAPI;
  } else {
    api =
      time === "thisWeek"
        ? workoutsHistoryWeekAPI
        : time === "thisMonth"
        ? workoutsHistoryMonthAPI
        : workoutsHistoryTodayAPI;
  }

  return useCustomQuery(["workouts", section, time], api, {
    enabled: section !== "favorite" && !!section && !!time,
  });
}
export function useFavWorkouts(section: string) {
  return useCustomQuery(["favWorkouts"], favWorkoutsAPI, {
    enabled: section === "favorite",
  });
}
