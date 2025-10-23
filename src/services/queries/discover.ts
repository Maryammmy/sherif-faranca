import { getServerData } from "../server";

export const discoverWorkoutsAPI = async () => {
  const data = await getServerData("/api/Discover/filters-WorkoutProgram");
  return data;
};
export const discoverVideosAPI = async () => {
  const data = await getServerData("/api/Discover/filters-Videos");
  return data;
};
