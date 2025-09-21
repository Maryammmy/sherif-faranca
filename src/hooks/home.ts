import { randomClassesAPI, recentWatchedAPI } from "./../services/queries/home";
import {
  classesAPI,
  discoverProgramsAPI,
  homeAPI,
  recommendForYouAPI,
} from "@/src/services/queries/home";
import { useCustomQuery } from ".";

export function useHome() {
  return useCustomQuery(["home"], homeAPI);
}
export function useRecommendForYou() {
  return useCustomQuery(["recommendForYou"], recommendForYouAPI);
}
export function useRandomClasses() {
  return useCustomQuery(["randomClasses"], randomClassesAPI);
}
export function useClasses() {
  return useCustomQuery(["classes"], classesAPI);
}
export function useDiscoverPrograms() {
  return useCustomQuery(["discoverPrograms"], discoverProgramsAPI);
}
export function useRecentWatched() {
  return useCustomQuery(["recentWatched"], recentWatchedAPI);
}
