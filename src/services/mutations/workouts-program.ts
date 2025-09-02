"use server";
import { IFavToggle } from "@/src/interfaces/fav";
import { postServerData } from "../server";

export const toggleWorkoutsFavAPI = async (payload: IFavToggle) => {
  const data = await postServerData("/api/WorkoutProgram/toggle", payload);
  return data;
};
