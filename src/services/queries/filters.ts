import { getServerData } from "../server";

export const filtersAPI = async () => {
  const data = await getServerData("WorkoutProgram/filters");
  return data;
};
