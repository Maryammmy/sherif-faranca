import { PAGE_SIZE } from "@/src/constants";
import { getServerData } from "../server";
export const subscriptionAPI = async (type = "monthly", page: number) => {
  const data = await getServerData(
    `Subscription/${type}?pageNumber=${page}&pageSize=${PAGE_SIZE}`,
  );
  return data;
};
