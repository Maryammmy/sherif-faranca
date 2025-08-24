import { useCustomQuery } from ".";
import { emailAPI, phoneAPI, profileAPI } from "@/services/users";

export function useProfile() {
  return useCustomQuery(["profile"], profileAPI);
}
export function useEmail() {
  return useCustomQuery(["email"], emailAPI);
}
export function usePhone() {
  return useCustomQuery(["phoneNumber"], phoneAPI);
}
