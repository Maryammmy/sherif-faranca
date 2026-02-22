import { getServerData } from "../server";

export const goalsAPI = async () => {
  const data = await getServerData("Questions/goals");
  return data;
};
export const myGoalsAPI = async () => {
  const data = await getServerData("MyFit/get-Mygoal");
  return data;
};
export const targetWeightAPI = async () => {
  const data = await getServerData("MyFit/Target-weight");
  return data;
};
export const targetGoalAPI = async () => {
  const data = await getServerData("MyFit/get-Targetgoal");
  return data;
};
export const stepAPI = async () => {
  const data = await getServerData("MyFit/steps");
  return data;
};
export const recommendedGoalAPI = async () => {
  const data = await getServerData("Steps/recommend");
  return data;
};
