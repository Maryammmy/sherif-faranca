"use client";

import { MoveLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Notification from "./Notification";
import { notifications } from "@/src/data/notifications";
import { Button } from "../ui/Button";

export default function NotificationList() {
  const [tab, setTab] = useState("unread");

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-primary h-[400px] rounded-b-3xl">
        <div className="flex items-center justify-between gap-2 text-white padding-layout">
          <Link href="/">
            <MoveLeft className="size-6" />
          </Link>
          <header>
            <h1 className="sm:text-2xl font-bold">Notification</h1>
          </header>
          <div>
            <Button className="bg-white text-gray-700 text-xs sm:text-base font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition">
              Make All Read
            </Button>
          </div>
        </div>
        <div className="absolute top-[71.99] sm:top-[120px] left-1/2 -translate-x-1/2 z-10 w-[calc(100%-40px)] sm:w-[calc(100%-80px)] bg-white rounded-t-3xl padding-layout min-h-[calc(100vh-71.99px)] sm:min-h-[calc(100vh-120px)]">
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
              {notifications.map((notification) => (
                <Notification
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
