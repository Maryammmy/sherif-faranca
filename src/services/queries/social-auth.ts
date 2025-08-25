import { getServerData } from "../server";

export const getGoogleAuthUrlAPI = async () => {
  const data = await getServerData("/api/Auth/google/frontend");
  return data;
};
export const getFacebookAuthUrlAPI = async () => {
  const data = await getServerData("/api/Auth/frontend/facebook");
  return data;
};
