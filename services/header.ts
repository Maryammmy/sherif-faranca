"use server";
import { getServerData } from "./server";

export const headerAPI = async () => {
  const data = await getServerData("/api/Home/UserGreeting");
  return data;
};
