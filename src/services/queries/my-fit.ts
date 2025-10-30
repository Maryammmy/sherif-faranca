import { PAGE_SIZE } from "@/src/constants";
import { getServerData } from "../server";

export const myFitAPI = async () => {
  const data = await getServerData("/api/MyFit/my-fit");
  return data;
};

export const myFitFavAPI = async () => {
  const data = await getServerData("/api/myfit/GetFav");
  return data;
};
export const myFitCalories = async () => {
  const data = await getServerData("/api/MyFit/calories");
  return data;
};
export const myFitTodayHistory = async (page: number) => {
  const data = await getServerData(
    `/api/MyFit/todayhistory-All?pageNumber=${page}&pageSize=${PAGE_SIZE}`
  );
  return data;
};
export const myFitWeekHistory = async (page: number) => {
  const data = await getServerData(
    `/api/MyFit/weekhistory-All?pageNumber=${page}&pageSize=${PAGE_SIZE}`
  );
  return data;
};
export const myFitMonthHistory = async (page: number) => {
  const data = await getServerData(
    `/api/MyFit/monthhistory-All?pageNumber=${page}&pageSize=${PAGE_SIZE}`
  );
  return data;
};
