"use server";

import { ISignupWithEmail } from "@/interfaces/auth";
import { baseAPI } from ".";

export const SignupWithEmailAPI = async (payload: ISignupWithEmail) => {
  const response = await baseAPI.post("/api/Auth/signup-with-email", payload);
  return response;
};
