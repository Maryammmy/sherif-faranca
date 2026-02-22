import { PAGE_SIZE } from "@/src/constants";
import { getServerData } from "../server";

export const faqAPI = async (page: number) => {
  const data = await getServerData(
    `Faq/get-allFAQ?pageNumber=${page}&pageSize=${PAGE_SIZE}`,
  );
  return data;
};
