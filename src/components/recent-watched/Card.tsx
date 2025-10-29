import Image from "@/src/components/ui/Image";
import {
  Clock12,
  EllipsisVertical,
  MoveUpRight,
  UserRound,
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { IRecentWatched } from "@/src/interfaces/main/home";
import CircularRing from "@/src/components/ui/CircularRing";
import { useTranslations } from "next-intl";

interface IProps {
  recentWatched: IRecentWatched;
}
export default function RecentWatchedCard({ recentWatched }: IProps) {
  const t = useTranslations("card");
  const {
    imageUrl,
    categoryName,
    levelName,
    time,
    title,
    videoType,
    watchProgressPercentage,
  } = recentWatched;
  return (
    <div className="relative rounded-2xl overflow-hidden text-white w-full h-[250px] shadow-lg">
      {/* Background image */}
      <Image src={imageUrl} alt={title} fill className="object-cover" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      {/* Content */}
      <div className="absolute z-20 inset-0 p-4 flex flex-col justify-between gap-2">
        {/* Top Section */}
        <div className="flex justify-between gap-4 items-start">
          <div className="flex-1 min-w-0">
            <h2 className="text-gray-200 font-medium truncate">{title}</h2>
            <span className="text-xs bg-primary p-2 rounded-lg inline-block mt-1 max-w-full truncate">
              {categoryName}
            </span>
          </div>
          <Button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-secondary">
              <EllipsisVertical />
            </span>
          </Button>
        </div>
        {/* Center Section */}
        <div>
          <div className="flex items-center justify-between gap-2">
            {/* Title  */}
            <h3 className="text-lg font-bold truncate max-w-full">
              {videoType}
            </h3>
            {/* Progress circle */}
            <div className="w-10 h-10 shrink-0">
              <CircularRing
                value={watchProgressPercentage}
                color="#3e1492"
                strokeWidth={5}
                text={`${watchProgressPercentage.toString()}%`}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm mt-2">
            <div className="flex min-w-0 flex-1 items-center gap-1 text-gray-300 font-medium">
              <UserRound />
              <span className="truncate">{levelName}</span>
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-1 text-gray-300 font-medium">
              <Clock12 />
              <span className="truncate">{time}</span>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div>
          <Button className="w-full bg-white text-black rounded-full py-2 px-4 flex justify-between items-center text-sm font-medium">
            {t("continueTheClass")}
            <div className="bg-primary text-white rounded-full flex items-center justify-center w-8 h-8 ml-2">
              <MoveUpRight />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
