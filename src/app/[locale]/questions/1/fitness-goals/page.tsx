import ContentResult from "@/src/components/questions/ContentResult";
import ContinueAndSkipButtons from "@/src/components/questions/ContinueAndSkipButtons";
import { useTranslations } from "next-intl";

function FitnessGoals() {
  const t = useTranslations("fitnessGoals");
  return (
    <div className="min-h-screen">
      <div className="padding-layout">
        <ContentResult
          img="keep-fit-result"
          title={t("title")}
          coloredTitle={{ lastColoredText: t("subTitle") }}
          description={t("description")}
        />
      </div>
      <ContinueAndSkipButtons continueHref="/questions/2" />
    </div>
  );
}

export default FitnessGoals;
