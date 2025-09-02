import { IFavToggle } from "@/src/interfaces/fav";
import { postServerData } from "../server";

export const toggleMyFitFavAPI = async (payload: IFavToggle) => {
  const data = await postServerData("/api/MyFit/toggle", payload);
  return data;
};
