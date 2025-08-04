"use server";

import { ISignupWithEmail, ISignupWithMobile } from "@/interfaces/auth/signup";
import { baseAPI } from "..";

export const SignupWithEmailAPI = async (payload: ISignupWithEmail) => {
  const response = await baseAPI.post("/api/Auth/signup-with-email", payload);
  return response;
};
export const SignupWithMobileAPI = async (payload: ISignupWithMobile) => {
  const response = await baseAPI.post("api/Auth/signup-with-mobile", payload);
  return response;
};
