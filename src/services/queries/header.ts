import { getServerData } from "../server";

export const headerAPI = async () => {
  const data = await getServerData("Home/UserGreeting");
  return data;
};
