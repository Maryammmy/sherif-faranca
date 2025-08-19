"use server";

import { IProfile } from "@/interfaces/main/settings";
import { getServerData, putServerData } from "./server";

export const profileAPI = async () => {
  const data = await getServerData("/api/Users/profile");
  return data;
};
export const updateProfileAPI = async (payload: IProfile) => {
  const data = await putServerData("/api/Users/profile", payload);
  return data;
};
