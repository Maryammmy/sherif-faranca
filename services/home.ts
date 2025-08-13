"use server";
import { getServerData } from "./server";

export const getHomeAPI = async () => {
  const data = await getServerData("/api/Home");
  return data;
};
