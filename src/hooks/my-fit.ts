import { useCustomQuery } from "./useCustomQuery";
import { myFitFavAPI } from "@/src/services/queries/my-fit";

export function useMyFitFav() {
  return useCustomQuery(["myFitFav"], myFitFavAPI);
}
