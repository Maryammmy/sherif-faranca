import {
  myNotificationsAPI,
  myNotificationsCountAPI,
} from "../services/queries/notification";
import { useCustomQuery } from "./useCustomQuery";

export function useMyNotifications() {
  return useCustomQuery(["notifications"], myNotificationsAPI, {
    refetchInterval: 10000,
  });
}
export function useMyNotificationsCount() {
  return useCustomQuery(["notificationsCount"], myNotificationsCountAPI, {
    refetchInterval: 10000,
  });
}
