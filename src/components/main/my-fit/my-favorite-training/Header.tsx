import { Link } from "@/src/i18n/navigation";
import Title from "../Title";
import { useTranslations } from "next-intl";

function FavoriteTrainingHeader() {
  const t = useTranslations("myFit.myFavoriteTraining");
  return (
    <div className="flex items-center justify-between">
      <Title title={t("title")} />
      <Link
        href="/my-favorite-training"
        className="border-b border-secondary text-secondary font-medium"
      >
        <span>{t("viewAll")}</span>
      </Link>
    </div>
  );
}

export default FavoriteTrainingHeader;
