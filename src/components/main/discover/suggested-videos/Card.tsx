import { Clock12, Flame, TrendingUp } from "lucide-react";
import Image from "@/src/components/ui/Image";
import React from "react";
import { ISuggestedVideo } from "@/src/interfaces/main/discover";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface IProps {
  video: ISuggestedVideo;
}
function SuggestedVideoCard({ video }: IProps) {
  const t = useTranslations("card");
  const { imageUrl, calories, durationMinutes, level, title, id } = video;
  return (
    <Link href={`/videos/${id}`} className="space-y-2">
      <div className="h-[250px] shadow-xl rounded-2xl overflow-hidden relative">
        <Image src={imageUrl} alt={title} className="object-cover" fill />
      </div>

      <div>
        <h3 className="text-gray-600 font-medium capitalize truncate">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-2 capitalize">
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <TrendingUp />
          <span className="truncate">{level}</span>
        </div>
        <div className="flex justify-center items-center gap-1 text-gray-400 text-sm font-medium">
          <Clock12 />
          <span>
            {durationMinutes}
            {t("min")}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Flame />
          <span className="truncate">
            {calories}
            {t("kcal")}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default SuggestedVideoCard;
