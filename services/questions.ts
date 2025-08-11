import { IPreferences } from "@/interfaces/questions";
import { baseAPI, serverBaseAPIWithToken } from ".";

export const getFoucsAreasAPI = async () => {
  const api = await serverBaseAPIWithToken();
  const response = await api.get("/api/Questions/Focas-area");
  return response?.data;
};
export const getGoalsAPI = async () => {
  const api = await serverBaseAPIWithToken();
  const response = await api.get("/api/Questions/goals");
  return response?.data;
};
export const getShapesAPI = async () => {
  const api = await serverBaseAPIWithToken();
  const response = await api.get("/api/Questions/body-shapes");
  return response?.data;
};
export const preferencesAPI = async (payload: IPreferences) => {
  const response = await baseAPI.post("/api/Questions/preferences", payload);
  return response?.data;
};
