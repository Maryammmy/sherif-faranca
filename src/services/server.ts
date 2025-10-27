import { baseAPI, baseAPIForm } from ".";
import { handleServerError } from "@/src/lib/utils";
export const getServerData = async (endpoint: string) => {
  const api = await baseAPI();
  const response = await api.get(endpoint);
  return response?.data;
};
export const postServerData = async (endpoint: string, payload?: unknown) => {
  try {
    const api = await baseAPI();
    const response = await api.post(endpoint, payload);
    console.log(response);
    return {
      success: response?.data?.isSuccess ?? true,
      data: response?.data,
      message: response?.data?.message || response?.data?.data?.message || "OK",
      errors: {},
    };
  } catch (error) {
    console.log(error);
    return handleServerError(error);
  }
};
export const postFormServerData = async (
  endpoint: string,
  payload?: unknown
) => {
  try {
    const api = await baseAPIForm();
    const response = await api.post(endpoint, payload);
    console.log(response);
    return {
      success: response?.data?.isSuccess ?? true,
      data: response?.data,
      message: response?.data?.message || response?.data?.data?.message || "OK",
      errors: {},
    };
  } catch (error) {
    console.log(error);
    return handleServerError(error);
  }
};
export const putServerData = async (endpoint: string, payload: unknown) => {
  try {
    const api = await baseAPI();
    const response = await api.put(endpoint, payload);
    return {
      success: response?.data?.isSuccess ?? true,
      data: response?.data,
      message: response?.data?.message || "OK",
      errors: {},
    };
  } catch (error) {
    return handleServerError(error);
  }
};
