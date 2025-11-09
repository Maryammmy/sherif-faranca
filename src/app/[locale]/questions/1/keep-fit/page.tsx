import Result from "@/src/components/questions/Result";
import { useTranslations } from "next-intl";

function KeepFit() {
  const t = useTranslations("keepFit");
  return (
    <Result
      progresses={[87.5, 0, 0]}
      img="keep-fit-result"
      title={t("title")}
      coloredTitle={{ lastColoredText: t("subTitle") }}
      description={t("description")}
      backHref="/questions/1/goal"
      nextHref="/questions/1/shape"
    />
  );
}

export default KeepFit;
