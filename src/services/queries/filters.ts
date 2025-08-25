import { getServerData } from "../server";

export const filtersAPI = async () => {
  const data = await getServerData("/api/WorkoutProgram/filters");
  return data;
};
