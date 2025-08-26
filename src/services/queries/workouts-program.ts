import { getServerData } from "../server";

export const workoutHistoryTodayAPI = async () => {
  const data = await getServerData("/api/WorkoutProgram/today");
  return data;
};
export const workoutHistoryWeekAPI = async () => {
  const data = await getServerData("/api/WorkoutProgram/week");
  return data;
};
export const workoutHistoryMonthAPI = async () => {
  const data = await getServerData("/api/WorkoutProgram/month");
  return data;
};
