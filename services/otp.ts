"use server";
import { SendRegistration } from "@/types/otp";
import { baseAPI } from ".";
import { IVerifyRegistrationEmail } from "@/interfaces/otp";

export const sendRegistrationAPI = async (payload: SendRegistration) => {
  const response = await baseAPI.post("/api/Otp/send-registration", payload);
  return response;
};
export const verifyRegistrationEmailAPI = async (
  payload: IVerifyRegistrationEmail
) => {
  const response = await baseAPI.post(
    "/api/Otp/verify-registration-email",
    payload
  );
  return response;
};
