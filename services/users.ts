"use server";

import { getServerData } from "./server";

export const profileAPI = async () => {
  const data = await getServerData("/api/Users/profile");
  return data;
};
