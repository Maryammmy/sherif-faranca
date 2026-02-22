import { getServerData } from "../server";

export const profileAPI = async () => {
  const data = await getServerData("Users/profile");
  return data;
};
export const countryAPI = async () => {
  const data = await getServerData("Country");
  return data;
};
export const emailAPI = async () => {
  const data = await getServerData("Users/current-email");
  return data;
};
export const phoneAPI = async () => {
  const data = await getServerData("Users/current-PhoneNumber");
  return data;
};
export const trainingAchievementAPI = async () => {
  const data = await getServerData("Users/training-achievement");
  return data;
};
