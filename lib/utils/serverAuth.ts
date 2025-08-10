"use server";
import { cookies } from "next/headers";

const TOKEN_KEY = "token";
export const getServerToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get(TOKEN_KEY)?.value || null;
  return token;
};
