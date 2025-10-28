import { useCustomQuery } from "./useCustomQuery";
import {
  myFitAPI,
  myFitCalories,
  myFitFavAPI,
} from "@/src/services/queries/my-fit";

export function useMyFit() {
  return useCustomQuery(["myFit"], myFitAPI);
}
export function useMyFitFav() {
  return useCustomQuery(["myFitFav"], myFitFavAPI);
}
export function useMyFitCalories() {
  return useCustomQuery(["myFitCalories"], myFitCalories);
}
