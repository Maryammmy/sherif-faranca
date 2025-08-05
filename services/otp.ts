"use server";
import {
  IVerifyRegistrationWithEmail,
  IVerifyRegistrationWithNumber,
  IVerifyResetPasswordWithEmail,
} from "@/interfaces/otp";
import { baseAPI } from ".";

export const verifyRegistrationWithEmailAPI = async (
  payload: IVerifyRegistrationWithEmail
) => {
  const response = await baseAPI.post(
    "/api/Otp/verify-registration-email",
    payload
  );
  return response;
};
export const verifyRegistrationWithNumberAPI = async (
  payload: IVerifyRegistrationWithNumber
) => {
  const response = await baseAPI.post(
    "/api/Otp/verify-registration-mobile",
    payload
  );
  return response;
};
export const verifyResetPasswordWithEmailAPI = async (
  payload: IVerifyResetPasswordWithEmail
) => {
  const response = await baseAPI.post("/api/Otp/verify-reset-email", payload);
  return response;
};
