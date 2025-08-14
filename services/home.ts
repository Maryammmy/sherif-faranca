"use server";
import { getServerData } from "./server";

export const homeAPI = async () => {
  const data = await getServerData("/api/Home");
  return data;
};
