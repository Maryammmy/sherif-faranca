import { getServerData } from "../server";

export const profileAPI = async () => {
  const data = await getServerData("/api/Users/profile");
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
