import { getToken } from "@/lib/utils";
import axios from "axios";

// import baseUrl
export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// create an instance of the axios server
export const baseAPI = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor للـ baseAPI
baseAPI.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});

// use this baseAPI form only if you are visiting a form data or uploading a document
export const baseAPIForm = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
// Interceptor للـ baseAPIForm
baseAPIForm.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});
