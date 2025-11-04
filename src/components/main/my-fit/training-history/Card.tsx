import Image from "@/src/components/ui/Image";
import { Link } from "@/src/i18n/navigation";
import { IHistory } from "@/src/interfaces/main/my-fit";
import { formatDateOnly, formatTimeOnly, getHref } from "@/src/lib/utils";
import { useTranslations } from "next-intl";

interface IProps {
  history: IHistory;
}
function WorkoutsCard({ history }: IProps) {
  const t = useTranslations("card");
  const {
    calories,
    durationMinutes,
    watchedDate,
    imageUrl,
    title,
    id,
    isProgram,
  } = history;
  return (
    <Link
      href={getHref(id, isProgram)}
      className="p-4 rounded-2xl border space-y-2"
    >
      <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt="history"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      </div>
      <div className="space-y-0.5">
        <div>
          <h2 className="sm:text-lg text-gray-700 font-bold truncate">
            {title}
          </h2>
        </div>
        <div className="flex justify-between items-center gap-5 text-secondary text-sm font-medium">
          <span>{formatDateOnly(watchedDate)}</span>
          <span>{t("direction")}</span>
          <span>{t("calories")}</span>
        </div>
        <div className="flex justify-between items-center gap-5 text-secondary font-medium">
          <span>{formatTimeOnly(watchedDate)}</span>
          <span>
            {durationMinutes}
            {t("mins")}
          </span>
          <span>
            {calories}
            {t("kcal")}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default WorkoutsCard;
