import { getServerData } from "../server";

export const myNotificationsAPI = async () => {
  const data = await getServerData("Notification/my");
  return data;
};
export const myNotificationsCountAPI = async () => {
  const data = await getServerData("Notification/unread-count");
  return data;
};
