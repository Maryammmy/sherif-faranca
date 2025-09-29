// "use server";

import { IProfile } from "@/src/interfaces/main/settings";
import { postServerData, putServerData } from "../server";
import { ChangePassword } from "@/src/schemas/main/settings/change-password";
import {
  ChangeEmail,
  VerifyEmail,
} from "@/src/schemas/main/settings/change-email";
import {
  ChangePhone,
  VerifyPhone,
} from "@/src/schemas/main/settings/change-phone";

export const updateProfileAPI = async (payload: IProfile) => {
  const data = await putServerData("/api/Users/profile", payload);
  return data;
};
export const changePasswordAPI = async (payload: ChangePassword) => {
  const data = await putServerData("/api/Users/change-password", payload);
  return data;
};
export const sendChangeEmailAPI = async (payload: ChangeEmail) => {
  const data = await postServerData(
    "/api/Users/send-change-email-otp",
    payload
  );
  return data;
};
export const verifyEmailAPI = async (payload: VerifyEmail) => {
  const data = await postServerData("/api/Users/verify-change-email", payload);
  return data;
};
export const sendChangePhoneAPI = async (payload: ChangePhone) => {
  const data = await postServerData(
    "/api/Users/send-change-phonenumber-otp",
    payload
  );
  return data;
};
export const verifyPhoneAPI = async (payload: VerifyPhone) => {
  const data = await postServerData("/api/Users/verify-change-mobile", payload);
  return data;
};
