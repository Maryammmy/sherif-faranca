import { useCustomQuery } from "./useCustomQuery";
import { myFitAPI, myFitFavAPI } from "@/src/services/queries/my-fit";

export function useMyFit() {
  return useCustomQuery(["myFit"], myFitAPI);
}
export function useMyFitFav() {
  return useCustomQuery(["myFitFav"], myFitFavAPI);
}
