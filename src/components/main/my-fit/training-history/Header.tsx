import { Link } from "@/src/i18n/navigation";
import Title from "../Title";
import { useTranslations } from "next-intl";

function TrainingHistoryHeader() {
  const t = useTranslations("myFit.myTrainingHistory");
  return (
    <div className="flex items-center justify-between">
      <Title title={t("title")} />
      <Link
        href="/training-history?time=today"
        className="border-b border-secondary text-secondary font-medium"
      >
        <span>{t("viewAll")}</span>
      </Link>
    </div>
  );
}

export default TrainingHistoryHeader;
