import { useCustomQuery } from ".";
import {
  countryAPI,
  emailAPI,
  phoneAPI,
  profileAPI,
  totalCalories,
} from "@/src/services/queries/users";

export function useProfile() {
  return useCustomQuery(["profile"], profileAPI);
}
export function useEmail() {
  return useCustomQuery(["email"], emailAPI);
}
export function usePhone() {
  return useCustomQuery(["phoneNumber"], phoneAPI);
}
export function useTotalCalories() {
  return useCustomQuery(["totalCalories"], totalCalories);
}
export function useCountry() {
  return useCustomQuery(["country"], countryAPI);
}
