import {
  discoverVideosAPI,
  discoverWorkoutsAPI,
} from "../services/queries/discover";
import { useCustomQuery } from "./useCustomQuery";

export function useDiscoverWorkouts(section: string) {
  return useCustomQuery(["discoverWorkouts"], discoverWorkoutsAPI, {
    enabled: section === "workouts",
  });
}
export function useDiscoverVideos(section: string) {
  return useCustomQuery(["discoverVideos"], discoverVideosAPI, {
    enabled: section === "videos",
  });
}
