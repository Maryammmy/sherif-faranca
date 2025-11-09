import { useTranslations } from "next-intl";
import SelectHeight from "./SelectHeight";
import Shared from "@/src/components/questions/Shared";

function Height() {
  const t = useTranslations("height");
  return (
    <Shared
      progresses={[37.5, 0, 0]}
      title={t("title")}
      coloredTitle={t("subTitle")}
      description={t("description")}
      content={<SelectHeight />}
      backHref="/questions/1/foucs-area"
      nextHref="/questions/1/weight"
    />
  );
}

export default Height;
