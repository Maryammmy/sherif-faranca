import { SkeletonCard } from "@/src/components/skeleton/Card";
import { useTrainingAchievement } from "@/src/hooks";
import { ITrainingAchievement } from "@/src/interfaces/main/settings";
import { useTranslations } from "next-intl";

function TrainingStats() {
  const t = useTranslations("settings.myTrainingAchievement");
  const { data } = useTrainingAchievement();
  const trainingAchievement: ITrainingAchievement = data;
  return (
    <div className="settings-panel-section">
      {!data ? (
        <div className="grid grid-cols-3 gap-2 capitalize.5 sm:gap-5">
          <SkeletonCard count={3} className="h-16" />
        </div>
      ) : (
        <>
          {" "}
          <div>
            <h3 className="setting-panel-section-heading">{t("title")}</h3>
          </div>
          <div className="grid grid-cols-3 gap-2 capitalize.5 sm:gap-5">
            <div className="bg-gray-100 rounded-md p-1 sm:p-2 flex flex-col items-center gap-1 text-center">
              <h4 className="text-xs text-gray-700 font-semibold">
                {trainingAchievement?.classesCount}
              </h4>
              <span className="text-xs text-secondary font-medium">
                {t("myClass")}
              </span>
            </div>
            <div className="bg-gray-100 rounded-md p-1 sm:p-2 flex flex-col items-center gap-1 text-center">
              <h4 className="text-xs text-gray-700 font-semibold">
                {trainingAchievement?.caloriesBurned}
              </h4>
              <span className="text-xs text-secondary font-medium">
                {t("calories")}
              </span>
            </div>
            <div className="bg-gray-100 rounded-md p-1 sm:p-2 flex flex-col items-center gap-1 text-center">
              <h4 className="text-xs text-gray-700 font-semibold">
                {trainingAchievement?.goal}
              </h4>
              <span className="text-xs text-secondary font-medium">
                {t("goal")}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TrainingStats;
