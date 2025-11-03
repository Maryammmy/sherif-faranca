"use client";

import Notification from "./Notification";
import { useMyNotifications } from "@/src/hooks";
import { INotification } from "@/src/interfaces/notifications";
import Header from "./Header";
import { SingleSkeletonCard, SkeletonCard } from "../skeleton/Card";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";
import { useTranslations } from "next-intl";

export default function NotificationList() {
  const t = useTranslations("notifications");
  const { data } = useMyNotifications();
  const notifications: INotification[] = data?.data;
  console.log(notifications);
  return (
    <div className="min-h-screen bg-white">
      {!data ? (
        <div className="padding-layout flex flex-col gap-5">
          <SingleSkeletonCard className="h-10 w-1/2 mx-auto mb-5" />
          <SkeletonCard count={5} className="h-16" />
        </div>
      ) : (
        <div className="relative bg-primary h-[400px] rounded-b-3xl">
          <Header />
          <div className="absolute top-[71.99] sm:top-[120px] h-1 left-1/2 -translate-x-1/2 z-10 w-[calc(100%-40px)] sm:w-[calc(100%-80px)] bg-white rounded-t-3xl padding-layout min-h-[calc(100vh-71.99px)] sm:min-h-[calc(100vh-120px)]">
            <div className="flex flex-col gap-5">
              {notifications?.length ? (
                notifications?.map((notification) => (
                  <Notification
                    key={notification?.id}
                    notification={notification}
                  />
                ))
              ) : (
                <EmptyStatePage message={t("noNotificationsFound")} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
