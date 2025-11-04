import {
  goalsAPI,
  myGoalsAPI,
  recommendedGoalAPI,
  stepAPI,
  targetGoalAPI,
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
export function useTargetGoal() {
  return useCustomQuery(["targetGoal"], targetGoalAPI);
}
export function useStep() {
  return useCustomQuery(["step"], stepAPI);
}
export function useRecommendedStepGoal() {
  return useCustomQuery(["recommendedStepGoal"], recommendedGoalAPI);
}
