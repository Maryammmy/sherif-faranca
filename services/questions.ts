import { IPreferences } from "@/interfaces/questions";
import { baseAPI, serverBaseAPIWithToken } from ".";

export const fetchQuestionsDataAPI = async (endpoint: string) => {
  const api = await serverBaseAPIWithToken();
  const response = await api.get(endpoint);
  return response?.data;
};
export const getFoucsAreaAPI = async () => {
  const data = await fetchQuestionsDataAPI("/api/Questions/Focas-area");
  return data;
};
export const getGoalsAPI = async () => {
  const data = await fetchQuestionsDataAPI("/api/Questions/goals");
  return data;
};
export const getShapesAPI = async () => {
  const data = await fetchQuestionsDataAPI("/api/Questions/body-shapes");
  return data;
};

export const getIdealBodyAPI = async () => {
  const data = await fetchQuestionsDataAPI("/api/Questions/Ideal-Body");
  return data;
};
export const getInjuriesAPI = async () => {
  const data = await fetchQuestionsDataAPI("/api/Questions/injuries");
  return data;
};
export const getLevelsAPI = async () => {
  const data = await fetchQuestionsDataAPI("/api/Questions/levels");
  return data;
};
export const getWorkoutTimeAPI = async () => {
  const data = await fetchQuestionsDataAPI("/api/Questions/workout-times");
  return data;
};
export const getMusicGenresAPI = async () => {
  const data = await fetchQuestionsDataAPI("/api/Questions/music-genres");
  return data;
};
export const preferencesAPI = async (payload: IPreferences) => {
  const response = await baseAPI.post("/api/Questions/preferences", payload);
  return response?.data;
};
