import { getServerData } from "../server";

export const myFitFavAPI = async () => {
  const data = await getServerData("/api/myfit/GetFav");
  return data;
};
