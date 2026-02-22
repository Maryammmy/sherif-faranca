import { PAGE_SIZE } from "@/src/constants";
import { getServerData } from "../server";

export const homeAPI = async () => {
  const data = await getServerData("Home");
  return data;
};
export const recentWatchedAPI = async (page: number) => {
  const data = await getServerData(
    `Home/Viewall-RecentWatch?page=${page}&pageSize=${PAGE_SIZE}`,
  );
  return data;
};

export const recommendForYouAPI = async (page: number) => {
  const data = await getServerData(
    `Home/Viewall-Recommend?page=${page}&pageSize=${PAGE_SIZE}`,
  );
  return data;
};
export const foucsAreaAPI = async () => {
  const data = await getServerData("Home/FocusAreas");
  return data;
};
export const classesAPI = async (focusAreaId: number | null, page: number) => {
  if (!focusAreaId) return null;

  const data = await getServerData(
    `Home/Viewall-Classes?focusAreaId=${focusAreaId}&page=${page}&pageSize=${PAGE_SIZE}`,
  );
  return data;
};
export const discoverProgramsAPI = async (page: number) => {
  const data = await getServerData(
    `Home/Viewall-Discover?page=${page}&pageSize=${PAGE_SIZE}`,
  );
  return data;
};
