"use server";
import { IFavToggle } from "@/src/interfaces/fav";
import { postServerData } from "../server";

export const toggleFavAPI = async (payload: IFavToggle) => {
  const data = await postServerData("/api/Fav/toggle", payload);
  return data;
};
