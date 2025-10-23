import { getServerData } from "../server";

export const myNotificationsAPI = async () => {
  const data = await getServerData("/api/Notification/my");
  return data;
};
