"use client";

import { useState } from "react";
import Notification from "./Notification";
import { Button } from "../ui/Button";
import { useMyNotifications } from "@/src/hooks";
import { INotification } from "@/src/interfaces/notifications";
import Header from "./Header";
import { SingleSkeletonCard, SkeletonCard } from "../skeleton/Card";

export default function NotificationList() {
  const [tab, setTab] = useState("unread");
  const { data } = useMyNotifications();
  const notifications: INotification[] = data?.data;
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
              <div className="sm:mx-auto grid grid-cols-2 gap-2 sm:gap-4">
                <Button
                  onClick={() => setTab("all")}
                  className={`sm:w-44 py-2.5 rounded-md font-medium text-xs sm:text-base ${
                    tab === "all"
                      ? "bg-gray-800 border border-gray-600 text-white"
                      : "text-gray-700 border"
                  }`}
                >
                  All Notification
                </Button>
                <Button
                  onClick={() => setTab("unread")}
                  className={`sm:w-44 py-2.5 rounded-md font-medium text-xs sm:text-base ${
                    tab === "unread"
                      ? "bg-gray-800 border border-gray-600 text-white"
                      : "text-gray-700 border"
                  }`}
                >
                  Unread Notification
                </Button>
              </div>
              <div className="flex flex-col gap-5">
                {notifications?.map((notification) => (
                  <Notification
                    key={notification?.id}
                    notification={notification}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
