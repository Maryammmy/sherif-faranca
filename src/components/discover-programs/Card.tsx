import { IDiscoverProgram } from "@/src/interfaces/main/home";
import { Flame, Play, TrendingUp } from "lucide-react";
import Image from "@/src/components/ui/Image";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

interface IProps {
  discoverProgram: IDiscoverProgram;
}
export default function DiscoverProgramCard({ discoverProgram }: IProps) {
  const t = useTranslations("card");
  const { id, classesCount, levelName, title, totalCalories, imageUrl } =
    discoverProgram;
  return (
    <div className="space-y-2">
      <div className="h-[250px] w-full shadow-xl rounded-2xl overflow-hidden relative">
        <Image src={imageUrl} alt={title} className="object-cover" fill />
      </div>

      <div>
        <h3 className="text-gray-600 font-medium">{title}</h3>
      </div>
      <div className="grid grid-cols-3 gap-2 capitalize">
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <TrendingUp />
          <span className="truncate">{levelName}</span>
        </div>
        <div className="flex items-center justify-center gap-1 text-gray-400 text-sm font-medium">
          <Play />
          <span className="truncate">
            {classesCount}
            {t("class")}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Flame />
          <span className="truncate">
            {totalCalories}
            {t("kcal")}
          </span>
        </div>
      </div>
      <Link
        href={`/programs/${id}`}
        className="flex justify-center items-center gap-2 bg-primary text-white py-3 px-5 rounded-full w-full font-medium"
      >
        <Play />
        <span className="">{t("startProgram")} </span>
      </Link>
    </div>
  );
}
