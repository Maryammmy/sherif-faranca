import { getServerData } from "../server";

export const programAPI = async (id: string) => {
  const data = await getServerData(`AboutTheProgram/${id}`);
  return data;
};
export const programCalenderAPI = async (id: string) => {
  const data = await getServerData(`AboutTheProgram/${id}/calendar`);
  return data;
};
export const programDayAPI = async (id: string) => {
  const data = await getServerData(`AboutTheProgram/day-page/${id}`);
  return data;
};
export const singleVideoAPI = async (id: string) => {
  const data = await getServerData(`Video/singleVideo/${id}`);
  return data;
};
export const programExerciseAPI = async (id: string) => {
  const data = await getServerData(`AboutTheProgram/Instruction/${id}`);
  return data;
};
