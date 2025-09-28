import {
  programAPI,
  programCalenderAPI,
  programDayAPI,
  programExerciseAPI,
} from "../services/queries/program";
import { useCustomQuery } from "./useCustomQuery";

export function useProgram(id: string) {
  return useCustomQuery(["program", id], () => programAPI(id));
}
export function useProgramCalender(id: string) {
  return useCustomQuery(["programCalender", id], () => programCalenderAPI(id));
}
export function useProgramDay(id: string) {
  return useCustomQuery(["programDay", id], () => programDayAPI(id));
}
export function useProgramExercise(id: string) {
  return useCustomQuery(["programExercise", id], () => programExerciseAPI(id));
}
