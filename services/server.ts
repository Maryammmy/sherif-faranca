import { getServerToken } from "@/lib/utils";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const initServerBaseAPI = async () => {
  const token = await getServerToken();
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
};
