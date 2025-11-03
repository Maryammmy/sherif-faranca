import { getServerData } from "../server";

export const goalsAPI = async () => {
  const data = await getServerData("/api/Questions/goals");
  return data;
};
export const myGoalsAPI = async () => {
  const data = await getServerData("/api/MyFit/get-Mygoal");
  return data;
};
