"use server";
import {
  IVerifyRegistrationWithEmail,
  IVerifyRegistrationWithNumber,
  IVerifyResetPasswordWithEmail,
} from "@/interfaces/otp";
import { postServerData } from "./server";

export const verifyRegistrationWithEmailAPI = async (
  payload: IVerifyRegistrationWithEmail
) => {
  const data = await postServerData(
    "/api/Otp/verify-registration-email",
    payload
  );
  return data;
};
export const verifyRegistrationWithNumberAPI = async (
  payload: IVerifyRegistrationWithNumber
) => {
  const data = await postServerData(
    "/api/Otp/verify-registration-mobile",
    payload
  );
  return data;
};
export const verifyResetPasswordWithEmailAPI = async (
  payload: IVerifyResetPasswordWithEmail
) => {
  const data = await postServerData("/api/Otp/verify-reset-email", payload);
  return data;
};
