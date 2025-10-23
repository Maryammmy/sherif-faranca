"use client";

import { Link } from "@/src/i18n/navigation";
import { Button } from "../ui/Button";
import { MoveLeft } from "lucide-react";
import { makeAllReadNotificationAPI } from "@/src/services/mutations/notification";
import { useQueryClient } from "@tanstack/react-query";

export default function Header() {
  const queryClient = useQueryClient();
  const makeReadAllNotification = async () => {
    const response = await makeAllReadNotificationAPI();
    if (response?.success === true) {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    }
  };
  return (
    <div className="flex items-center justify-between gap-2 text-white padding-layout">
      <Link href="/">
        <MoveLeft className="size-6" />
      </Link>
      <header>
        <h1 className="sm:text-2xl font-bold">Notification</h1>
      </header>
      <div>
        <Button
          onClick={makeReadAllNotification}
          className="bg-white text-gray-700 text-xs sm:text-base font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Make All Read
        </Button>
      </div>
    </div>
  );
}
