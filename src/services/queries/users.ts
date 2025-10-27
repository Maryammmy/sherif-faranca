import { getServerData } from "../server";

export const profileAPI = async () => {
  const data = await getServerData("/api/Users/profile");
  return data;
};
export const countryAPI = async () => {
  const data = await getServerData("/api/Country");
  return data;
};
export const emailAPI = async () => {
  const data = await getServerData("/api/Users/current-email");
  return data;
};
export const phoneAPI = async () => {
  const data = await getServerData("/api/Users/current-PhoneNumber");
  return data;
};
export const totalCalories = async () => {
  const data = await getServerData("/api/Users/total-calories");
  return data;
};
