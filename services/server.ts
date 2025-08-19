import { baseAPI } from ".";

export const getServerData = async (endpoint: string) => {
  const api = await baseAPI();
  const response = await api.get(endpoint);
  return response?.data;
};
export const postServerData = async (endpoint: string, payload: unknown) => {
  const api = await baseAPI();
  const response = await api.post(endpoint, payload);
  return response?.data;
};
export const putServerData = async (endpoint: string, payload: unknown) => {
  const api = await baseAPI();
  const response = await api.put(endpoint, payload);
  return response?.data;
};
