import { useCustomQuery } from ".";
import { emailAPI, phoneAPI, profileAPI } from "@/src/services/queries/users";

export function useProfile() {
  return useCustomQuery(["profile"], profileAPI);
}
export function useEmail() {
  return useCustomQuery(["email"], emailAPI);
}
export function usePhone() {
  return useCustomQuery(["phoneNumber"], phoneAPI);
}
