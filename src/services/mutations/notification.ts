"use server";
import { postServerData } from "../server";

export const makeAllReadNotificationAPI = async () => {
  const data = await postServerData("Notification/mark-all-read");
  return data;
};
export const makeReadNotificationAPI = async (id: number) => {
  const data = await postServerData(`Notification/mark-read/${id}`);
  return data;
};
