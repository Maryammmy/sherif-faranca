import { MoveLeft, MoveRight } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

function FavoriteTrainingHeader() {
  const t = useTranslations("myFit.myFavoriteTraining");
  const locale = useLocale();
  const isAr = locale === "ar";
  const MoveIcon = isAr ? MoveRight : MoveLeft;
  return (
    <div className="flex justify-between items-center gap-2 text-gray-700 pb-5">
      <Link href="/my-fit">
        <MoveIcon className="sm:size-10" />
      </Link>
      <header className="flex-1 flex justify-center">
        <h1 className="font-bold text-lg sm:text-2xl capitalize">
          {t("title")}
        </h1>
      </header>
    </div>
  );
}

export default FavoriteTrainingHeader;
