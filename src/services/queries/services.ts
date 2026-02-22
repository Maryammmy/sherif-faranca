import { getServerData } from "../server";

export const privacyPolicyAPI = async () => {
  const data = await getServerData("Privacy");
  return data;
};
export const contactUsAPI = async () => {
  const data = await getServerData("ContactUs");
  return data;
};
export const aboutUsAPI = async () => {
  const data = await getServerData("AboutUs");
  return data;
};
