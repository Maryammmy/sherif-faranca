"use server";

import { IProfile } from "@/interfaces/main/settings";
import { getServerData, postServerData, putServerData } from "./server";
import { ChangeEmail, VerifyEmail } from "@/schema/main/settings/change-email";
import { ChangePassword } from "@/schema/main/settings/change-password";

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
export const emailAPI = async () => {
  const data = await getServerData("/api/Users/current-email");
  return data;
};
export const sendChangeEmailAPI = async (payload: ChangeEmail) => {
  const data = await postServerData(
    "/api/Users/send-change-email-otp",
    payload
  );
  return data;
};
export const verifyChangeEmailAPI = async (payload: VerifyEmail) => {
  const data = await postServerData("/api/Users/verify-change-email", payload);
  return data;
};
