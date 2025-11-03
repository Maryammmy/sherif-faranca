import {
  goalsAPI,
  myGoalsAPI,
  targetWeightAPI,
} from "../services/queries/goals";
import { useCustomQuery } from "./useCustomQuery";

export function useGoals() {
  return useCustomQuery(["goals"], goalsAPI);
}
export function useMyGoals() {
  return useCustomQuery(["myGoals"], myGoalsAPI);
}
export function useTargetWeight() {
  return useCustomQuery(["targetWeight"], targetWeightAPI);
}
