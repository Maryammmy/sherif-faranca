import { baseAPI } from ".";
import { handleServerError } from "@/lib/utils";

// export const getServerData = async (endpoint: string) => {
//   try {
//     const api = await baseAPI();
//     const response = await api.get(endpoint);
//     return response?.data;
//   } catch (error) {
//     return handleServerError(error);
//   }
// };
export const getServerData = async (endpoint: string) => {
  const api = await baseAPI();
  const response = await api.get(endpoint);
  return response?.data;
};
export const postServerData = async (endpoint: string, payload: unknown) => {
  try {
    const api = await baseAPI();
    const response = await api.post(endpoint, payload);
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
