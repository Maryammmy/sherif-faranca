import { getServerData } from "../server";

export const programAPI = async (id: string) => {
  const data = await getServerData(`/api/AboutTheProgram/${id}`);
  return data;
};
export const programCalenderAPI = async (id: string) => {
  const data = await getServerData(`/api/AboutTheProgram/${id}/calendar`);
  return data;
};
export const programDayAPI = async (id: string) => {
  const data = await getServerData(`/api/AboutTheProgram/day-page/${id}`);
  return data;
};
export const programExerciseAPI = async (id: string) => {
  const data = await getServerData(`/api/AboutTheProgram/Instruction/${id}`);
  return data;
};
