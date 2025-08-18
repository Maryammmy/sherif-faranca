import { useCustomQuery } from ".";
import { profileAPI } from "@/services/users";

export function useProfile() {
  return useCustomQuery(["profile"], profileAPI);
}
