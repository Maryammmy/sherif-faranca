import { IClass } from "@/src/interfaces/main/home";
import { Clock12, Flame, TrendingUp } from "lucide-react";
import Image from "@/src/components/ui/Image";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

interface IProps {
  classicClass: IClass;
}
export default function ClassicClassCard({ classicClass }: IProps) {
  const t = useTranslations("card");
  const { title, level, calories, duration, imageUrl, videoId } = classicClass;
  return (
    <Link href={`/videos/${videoId}`} className="space-y-2">
      <div className="h-[250px] shadow-xl rounded-2xl overflow-hidden relative">
        <Image src={imageUrl} alt={title} className="object-cover" fill />
      </div>

      <div>
        <h3 className="text-gray-600 font-medium truncate">{title}</h3>
      </div>
      <div className="grid grid-cols-3 gap-2 capitalize">
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <TrendingUp />
          <span className="truncate">{level}</span>
        </div>
        <div className="flex justify-center items-center gap-1 text-gray-400 text-sm font-medium">
          <Clock12 />
          <span>{duration}</span>
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
