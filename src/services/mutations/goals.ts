"use server";

import {
  ICustomStepGoal,
  IRecommendedStepGoal,
  ITargetGoal,
  ITargetWeight,
} from "@/src/interfaces/main/settings/account/goals";
import { postServerData, putServerData } from "../server";

export const targetWeightAPI = async (payload: ITargetWeight) => {
  const data = await postServerData("/api/MyFit/target-weight", payload);
  return data;
};
export const goalAPI = async (payload: ITargetGoal) => {
  const data = await putServerData(
    "/api/Questions/update-userPreference",
    payload
  );
  return data;
};
export const customStepGoalAPI = async (payload: ICustomStepGoal) => {
  const data = await postServerData("/api/Steps/goal", payload);
  return data;
};
export const recommendedStepGoalAPI = async (payload: IRecommendedStepGoal) => {
  const data = await putServerData("/api/Steps/update-goal", payload);
  return data;
};
