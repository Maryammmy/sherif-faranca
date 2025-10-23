"use server";

import { IFilterVideos, IFilterWorkouts } from "@/src/interfaces/main/discover";
import { postServerData } from "../server";

export const fliterDiscoverWorkoutAPI = async (
  pageNumber: number,
  pageSize: number,
  payload: IFilterWorkouts
) => {
  const data = await postServerData(
    `/api/Discover/filter-WorkoutProgram?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    payload
  );
  return data;
};
export const fliterDiscoverVideoAPI = async (
  pageNumber: number,
  pageSize: number,
  payload: IFilterVideos
) => {
  const data = await postServerData(
    `/api/Discover/filter-WorkoutProgram?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    payload
  );
  return data;
};
