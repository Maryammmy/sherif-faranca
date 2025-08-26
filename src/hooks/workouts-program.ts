import { useCustomQuery } from ".";
import {
  workoutHistoryMonthAPI,
  workoutHistoryTodayAPI,
  workoutHistoryWeekAPI,
} from "../services/queries/workouts-program";

export function useWorkoutHistoryToday() {
  return useCustomQuery(["workoutHistoryToday"], workoutHistoryTodayAPI);
}
export function useWorkoutHistoryWeek() {
  return useCustomQuery(["workoutHistoryWeek"], workoutHistoryWeekAPI);
}
export function useWorkoutHistoryMonth() {
  return useCustomQuery(["workoutHistoryMonth"], workoutHistoryMonthAPI);
}
