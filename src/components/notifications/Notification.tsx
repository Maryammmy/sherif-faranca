import { INotification } from "@/src/interfaces/notifications";
import { timeAgo } from "@/src/lib/utils/timeAgo";
import { makeReadNotificationAPI } from "@/src/services/mutations/notification";
import { useQueryClient } from "@tanstack/react-query";
import { Bell } from "lucide-react";

interface IProps {
  notification: INotification;
}
function Notification({ notification }: IProps) {
  const queryClient = useQueryClient();
  const { id, title, body, createdAt, isRead } = notification;
  const makeReadNotification = async () => {
    if (isRead) return;
    const response = await makeReadNotificationAPI(id);
    console.log(response);
    if (response?.success === true) {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    }
  };

  return (
    <div
      onClick={!isRead ? makeReadNotification : undefined}
      className={`flex items-center gap-3 p-4 rounded-3xl shadow-sm transition
    ${
      isRead ? "bg-gray-50" : "bg-primary/10 hover:bg-primary/20 cursor-pointer"
    }
  `}
    >
      <div
        className={`text-3xl w-16 h-16 rounded-2xl flex justify-center items-center shrink-0
      ${isRead ? "bg-primary" : "bg-primary/80"}
    `}
      >
        <Bell className="text-white" />
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
            {timeAgo(createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Notification;
