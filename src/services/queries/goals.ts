import { getServerData } from "../server";

export const goalsAPI = async () => {
  const data = await getServerData("/api/Questions/goals");
  return data;
};
export const myGoalsAPI = async () => {
  const data = await getServerData("/api/MyFit/get-Mygoal");
  return data;
};
export const targetWeightAPI = async () => {
  const data = await getServerData("/api/MyFit/Target-weight");
  return data;
};
export const targetGoalAPI = async () => {
  const data = await getServerData("/api/MyFit/get-Targetgoal");
  return data;
};
export const stepAPI = async () => {
  const data = await getServerData("/api/MyFit/steps");
  return data;
};
export const recommendedGoalAPI = async () => {
  const data = await getServerData("/api/Steps/recommend");
  return data;
};
