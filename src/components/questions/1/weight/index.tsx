import { useTranslations } from "next-intl";
import SelectWeight from "./SelectWeight";
import Shared from "@/src/components/questions/Shared";

function Weight() {
  const t = useTranslations("weight");
  return (
    <Shared
      progresses={[50, 0, 0]}
      title={t("title")}
      coloredTitle={t("subTitle")}
      description={t("description")}
      content={<SelectWeight />}
      backHref="/questions/1/height"
      nextHref="/questions/1/bmi"
    />
  );
}

export default Weight;
