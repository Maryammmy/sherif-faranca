"use server";

import { IProfile } from "@/interfaces/main/settings";
import { getServerData, putServerData } from "./server";
import { ChangePassword } from "@/schema/main/settings/changePassword";

export const profileAPI = async () => {
  const data = await getServerData("/api/Users/profile");
  return data;
};
export const updateProfileAPI = async (payload: IProfile) => {
  const data = await putServerData("/api/Users/profile", payload);
  return data;
};
export const changePasswordAPI = async (payload: ChangePassword) => {
  const data = await putServerData("/api/Users/change-password", payload);
  return data;
};
