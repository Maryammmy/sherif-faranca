import { initServerBaseAPI } from "./server";

// export const getFoucsAreasAPI = async () => {
//   const token = await getServerToken();
//   const response = await axios.get(`${baseURL}/api/Questions/Focas-area`, {
//     headers: {
//       "Content-Type": "application/json",
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//     },
//   });
//   return response?.data; // << هنا بس
// };
export const getFoucsAreasAPI = async () => {
  const api = await initServerBaseAPI();
  const response = await api.get("/api/Questions/Focas-area");
  return response?.data; // << هنا بس
};
