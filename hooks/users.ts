import { useCustomQuery } from ".";
import { emailAPI, profileAPI } from "@/services/users";

export function useProfile() {
  return useCustomQuery(["profile"], profileAPI);
}
export function useEmail() {
  return useCustomQuery(["email"], emailAPI);
}
