import { getServerData } from "./server";

export const privacyPolicyAPI = async () => {
  const data = await getServerData("/api/Privacy");
  return data;
};
export const contactUsAPI = async () => {
  const data = await getServerData("/api/ContactUs");
  return data;
};
export const aboutUsAPI = async () => {
  const data = await getServerData("/api/AboutUs");
  return data;
};
