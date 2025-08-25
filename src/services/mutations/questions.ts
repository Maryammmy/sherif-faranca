"use server";
import { IPreferences } from "@/src/interfaces/questions";
import { getServerData, postServerData } from "../server";

export const getFoucsAreaAPI = async () => {
  const data = await getServerData("/api/Questions/Focas-area");
  return data;
};
export const getGoalsAPI = async () => {
  const data = await getServerData("/api/Questions/goals");
  return data;
};
export const getShapesAPI = async () => {
  const data = await getServerData("/api/Questions/body-shapes");
  return data;
};
export const getIdealBodyAPI = async () => {
  const data = await getServerData("/api/Questions/Ideal-Body");
  return data;
};
export const getInjuriesAPI = async () => {
  const data = await getServerData("/api/Questions/injuries");
  return data;
};
export const getLevelsAPI = async () => {
  const data = await getServerData("/api/Questions/levels");
  return data;
};
export const getWorkoutTimeAPI = async () => {
  const data = await getServerData("/api/Questions/workout-times");
  return data;
};
export const getMusicGenresAPI = async () => {
  const data = await getServerData("/api/Questions/music-genres");
  return data;
};
export const preferencesAPI = async (payload: IPreferences) => {
  const data = await postServerData("/api/Questions/preferences", payload);
  return data;
};
