import { getServerData } from "../server";

export const homeAPI = async () => {
  const data = await getServerData("/api/Home");
  return data;
};
export const recommendForYouAPI = async () => {
  const data = await getServerData(
    "/api/Home/Viewall-Recommend?page=1&pageSize=20"
  );
  return data;
};
export const classesAPI = async () => {
  const data = await getServerData(
    "/api/Home/Viewall-Classes?page=1&pageSize=20"
  );
  return data;
};
export const discoverProgramsAPI = async () => {
  const data = await getServerData(
    "/api/Home/Viewall-Discover?page=1&pageSize=20"
  );
  return data;
};
