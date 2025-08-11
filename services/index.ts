import { getServerToken, getToken } from "@/lib/utils";
import axios from "axios";

// import baseUrl
export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const token = getToken();

// create an instance of the axios server
export const baseAPI = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  },
});

// use this baseAPI form only if you are visiting a form data or uploading a document
export const baseAPIForm = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  },
});

// server-side axios instance factory (async)
export const serverBaseAPIWithToken = async () => {
  const token = await getServerToken();
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
};
