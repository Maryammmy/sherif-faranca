import Result from "@/src/components/questions/Result";
import { useTranslations } from "next-intl";

function BuildMuscle() {
  const t = useTranslations("buildMuscle");
  return (
    <Result
      progresses={[87.5, 0, 0]}
      img="build-muscle-result"
      title={t("title")}
      coloredTitle={{ lastColoredText: t("subTitle") }}
      description={t("description")}
      backHref="/questions/1/goal"
      nextHref="/questions/1/shape"
    />
  );
}

export default BuildMuscle;
