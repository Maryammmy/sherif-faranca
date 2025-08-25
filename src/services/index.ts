import { getToken } from "@/src/lib/utils";
import axios from "axios";

// import baseUrl
export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// server-side axios instance factory (async)
export const baseAPI = async () => {
  const token = await getToken();
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
};
// use this baseAPI form only if you are visiting a form data or uploading a document
export const baseAPIForm = async () => {
  const token = await getToken();
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "multipart/form-data",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
};
