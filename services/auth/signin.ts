import { ISigninWithEmail } from "@/interfaces/auth/signin";
import { baseAPI } from "..";

export const SigninWithEmailAPI = async (payload: ISigninWithEmail) => {
  const response = await baseAPI.post("/api/Auth/login/email", payload);
  return response;
};
