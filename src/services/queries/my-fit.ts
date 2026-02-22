import { PAGE_SIZE } from "@/src/constants";
import { getServerData } from "../server";

export const myFitAPI = async () => {
  const data = await getServerData("MyFit/my-fit");
  return data;
};

export const myFitFavAPI = async () => {
  const data = await getServerData("myfit/GetFav");
  return data;
};
export const myFitCalories = async () => {
  const data = await getServerData("MyFit/calories");
  return data;
};
export const myFitTodayHistory = async (page: number) => {
  const data = await getServerData(
    `MyFit/todayhistory-All?pageNumber=${page}&pageSize=${PAGE_SIZE}`,
  );
  return data;
};
export const myFitWeekHistory = async (page: number) => {
  const data = await getServerData(
    `MyFit/weekhistory-All?pageNumber=${page}&pageSize=${PAGE_SIZE}`,
  );
  return data;
};
export const myFitMonthHistory = async (page: number) => {
  const data = await getServerData(
    `MyFit/monthhistory-All?pageNumber=${page}&pageSize=${PAGE_SIZE}`,
  );
  return data;
};
