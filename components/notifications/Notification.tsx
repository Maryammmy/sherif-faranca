import { INotification } from "@/interfaces/notifications";

interface IProps {
  notification: INotification;
}
function Notification({ notification }: IProps) {
  const { icon, message, title, type } = notification;
  return (
    <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-4 rounded-3xl shadow-sm hover:bg-gray-100 transition">
      <div className="text-3xl w-16 h-16 bg-primary rounded-2xl flex justify-center items-center shrink-0">
        {icon}
      </div>
      <div className="flex-grow flex flex-col sm:flex-row sm:justify-between gap-0.5">
        <div className="flex-grow flex flex-col gap-0.5">
          <h2 className="font-semibold text-sm sm:text-base text-gray-800">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            {message}
          </p>
          <span className="text-xs text-gray-400 font-medium">{type}</span>
        </div>
        <div className="text-xs">
          <span className="text-gray-400 font-medium">1h ago</span>
        </div>
      </div>
    </div>
  );
}

export default Notification;
