import { getServerData } from "../server";

export const myFitAPI = async () => {
  const data = await getServerData("/api/MyFit/my-fit");
  return data;
};

export const myFitFavAPI = async () => {
  const data = await getServerData("/api/myfit/GetFav");
  return data;
};
