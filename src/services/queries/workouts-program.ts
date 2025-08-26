import { getServerData } from "../server";

export const workoutsHistoryTodayAPI = async () => {
  const data = await getServerData("/api/WorkoutProgram/today");
  return data;
};
export const workoutsHistoryWeekAPI = async () => {
  const data = await getServerData("/api/WorkoutProgram/week");
  return data;
};
export const workoutsHistoryMonthAPI = async () => {
  const data = await getServerData("/api/WorkoutProgram/month");
  return data;
};
export const recentWorkoutsAPI = async () => {
  const data = await getServerData("/api/WorkoutProgram/GetRecentViews");
  return data;
};
export const favWorkoutsAPI = async () => {
  const data = await getServerData("/api/WorkoutProgram/GetFav");
  return data;
};
