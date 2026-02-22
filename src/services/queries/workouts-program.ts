import { getServerData } from "../server";

export const workoutsHistoryTodayAPI = async () => {
  const data = await getServerData("WorkoutProgram/today");
  return data;
};
export const workoutsHistoryWeekAPI = async () => {
  const data = await getServerData("WorkoutProgram/week");
  return data;
};
export const workoutsHistoryMonthAPI = async () => {
  const data = await getServerData("WorkoutProgram/month");
  return data;
};
export const recentWorkoutsAPI = async () => {
  const data = await getServerData("WorkoutProgram/GetRecentViews");
  return data;
};
export const favWorkoutsAPI = async () => {
  const data = await getServerData("WorkoutProgram/GetFav");
  return data;
};
