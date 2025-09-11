import { getServerData } from "../server";
export const subscriptionAPI = async (type = "monthly") => {
  const data = await getServerData(
    `/api/Subscription/${type}?pageNumber=1&pageSize=3`
  );
  return data;
};
