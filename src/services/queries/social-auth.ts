import { getServerData } from "../server";

export const getGoogleAuthUrlAPI = async () => {
  const data = await getServerData("Auth/google/frontend");
  return data;
};
export const getFacebookAuthUrlAPI = async () => {
  const data = await getServerData("Auth/frontend/facebook");
  return data;
};
