"use server";
import { IPreferences } from "@/src/interfaces/questions";
import { getServerData, postServerData } from "../server";

export const getFoucsAreaAPI = async () => {
  const data = await getServerData("Questions/Focas-area");
  return data;
};
export const getGoalsAPI = async () => {
  const data = await getServerData("Questions/goals");
  return data;
};
export const getShapesAPI = async () => {
  const data = await getServerData("Questions/body-shapes");
  return data;
};
export const getIdealBodyAPI = async () => {
  const data = await getServerData("Questions/Ideal-Body");
  return data;
};
export const getInjuriesAPI = async () => {
  const data = await getServerData("Questions/injuries");
  return data;
};
export const getLevelsAPI = async () => {
  const data = await getServerData("Questions/levels");
  return data;
};
export const getWorkoutTimeAPI = async () => {
  const data = await getServerData("Questions/workout-times");
  return data;
};
export const getMusicGenresAPI = async () => {
  const data = await getServerData("Questions/music-genres");
  return data;
};
export const preferencesAPI = async (payload: IPreferences) => {
  const data = await postServerData("Questions/preferences", payload);
  return data;
};
