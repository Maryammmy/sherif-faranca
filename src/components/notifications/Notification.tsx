"use client";

import { INotification } from "@/src/interfaces/notifications";
import { timeAgo } from "@/src/lib/utils/timeAgo";
import { makeReadNotificationAPI } from "@/src/services/mutations/notification";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/navigation";
import Image from "../ui/Image";
import { Button } from "../ui/Button";

interface IProps {
  notification: INotification;
}

function Notification({ notification }: IProps) {
  const t = useTranslations();
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    id,
    title,
    body,
    createdAt,
    isRead,
    isProgram,
    videoId,
    workoutId,
    targetImageUrl,
    targetTitle,
  } = notification;

  const handleNotificationClick = async () => {
    // تحديد الـ URL حسب نوع الإشعار
    const targetUrl = isProgram
      ? `/programs/${workoutId}`
      : `/videos/${videoId}`;

    if (!isRead) {
      // استدعاء API لعمل read
      const response = await makeReadNotificationAPI(id);
      if (response?.success === true) {
        queryClient.invalidateQueries({ queryKey: ["notifications"] });
        router.push(targetUrl); // بعد القراءة روح للصفحة
      }
    } else {
      // لو مقروء بالفعل → روح على طول
      router.push(targetUrl);
    }
  };

  return (
    <Button
      onClick={handleNotificationClick}
      className={`flex items-center gap-3 p-4 rounded-3xl shadow-sm transition text-start
      ${
        isRead
          ? "bg-gray-50 hover:bg-gray-100"
          : "bg-primary/10 hover:bg-primary/20"
      }
    `}
    >
      <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex justify-center items-center shrink-0">
        <Image src={targetImageUrl} alt={targetTitle} fill />
      </div>
      <div className="flex-grow flex flex-col sm:flex-row sm:justify-between gap-0.5">
        <div className="flex-grow flex flex-col gap-0.5">
          <h2
            className={`font-semibold text-sm sm:text-base ${
              isRead ? "text-gray-800" : "text-black font-bold"
            }`}
          >
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-medium">{body}</p>
        </div>
        <div className="text-xs">
          <span className="text-gray-400 font-medium">
            {timeAgo(createdAt, t)}
          </span>
        </div>
      </div>
    </Button>
  );
}

export default Notification;
