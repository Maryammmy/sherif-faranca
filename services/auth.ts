import {
  ResetPassword,
  SendRegistration,
  SendResetPassword,
} from "@/types/auth";
import { baseAPI } from ".";
import {
  ISigninWithEmail,
  ISignupWithEmail,
  ISignupWithNumber,
} from "@/interfaces/auth";

export const sendRegistrationAPI = async (payload: SendRegistration) => {
  const response = await baseAPI.post("/api/Otp/send-registration", payload);
  return response?.data;
};
export const signupWithEmailAPI = async (payload: ISignupWithEmail) => {
  const response = await baseAPI.post("/api/Auth/signup-with-email", payload);
  return response?.data;
};

export const signupWithNumberAPI = async (payload: ISignupWithNumber) => {
  const response = await baseAPI.post("api/Auth/signup-with-mobile", payload);
  return response?.data;
};
export const signinWithEmailAPI = async (payload: ISigninWithEmail) => {
  const response = await baseAPI.post("/api/Auth/login/email", payload);
  return response?.data;
};
export const getGoogleAuthUrlAPI = async () => {
  const response = await baseAPI.get("/api/Auth/google/frontend");
  return response?.data;
};

export const getFacebookAuthUrlAPI = async () => {
  const response = await baseAPI.get("/api/Auth/frontend/facebook");
  return response?.data;
};
export const sendResetPasswordAPI = async (payload: SendResetPassword) => {
  const response = await baseAPI.post("/api/Otp/send-reset", payload);
  return response?.data;
};
export const resetPasswordAPI = async (payload: ResetPassword) => {
  const response = await baseAPI.post("/api/Auth/reset-password", payload);
  return response?.data;
};
