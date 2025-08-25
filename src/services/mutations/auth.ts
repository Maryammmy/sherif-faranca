"use server";
import {
  ResetPassword,
  SendRegistration,
  SendResetPassword,
} from "@/src/types/auth";
import {
  ISigninWithEmail,
  ISigninWithNumber,
  ISignupWithEmail,
  ISignupWithNumber,
} from "@/src/interfaces/auth";
import { postServerData } from "../server";

export const sendRegistrationAPI = async (payload: SendRegistration) => {
  const data = await postServerData("/api/Otp/send-registration", payload);
  return data;
};
export const signupWithEmailAPI = async (payload: ISignupWithEmail) => {
  const data = await postServerData("/api/Auth/signup-with-email", payload);
  return data;
};

export const signupWithNumberAPI = async (payload: ISignupWithNumber) => {
  const data = await postServerData("api/Auth/signup-with-mobile", payload);
  return data;
};
export const signinWithEmailAPI = async (payload: ISigninWithEmail) => {
  const data = await postServerData("/api/Auth/login/email", payload);
  return data;
};
export const signinWithNumberAPI = async (payload: ISigninWithNumber) => {
  const data = await postServerData("/api/Auth/login/phone", payload);
  return data;
};
export const sendResetPasswordAPI = async (payload: SendResetPassword) => {
  const data = await postServerData("/api/Otp/send-reset", payload);
  return data;
};
export const resetPasswordAPI = async (payload: ResetPassword) => {
  const data = await postServerData("/api/Auth/reset-password", payload);
  return data;
};
