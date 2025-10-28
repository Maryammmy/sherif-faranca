import { useTranslations } from "next-intl";

function TrainingStats() {
  const t = useTranslations("settings.myTrainingAchievement");
  return (
    <div className="settings-panel-section">
      <div>
        <h3 className="setting-panel-section-heading">{t("title")}</h3>
      </div>
      <div className="grid grid-cols-3 gap-2 capitalize.5 sm:gap-5">
        <div className="bg-gray-100 rounded-md p-1 sm:p-2 flex flex-col items-center gap-1 text-center">
          <h4 className="text-sm text-gray-700 font-semibold">11 Class</h4>
          <span className="text-xs text-secondary font-medium">
            {t("myClass")}
          </span>
        </div>
        <div className="bg-gray-100 rounded-md p-1 sm:p-2 flex flex-col items-center gap-1 text-center">
          <h4 className="text-sm text-gray-700 font-semibold">11 Class</h4>
          <span className="text-xs text-secondary font-medium">
            {t("calories")}
          </span>
        </div>
        <div className="bg-gray-100 rounded-md p-1 sm:p-2 flex flex-col items-center gap-1 text-center">
          <h4 className="text-sm text-gray-700 font-semibold">11 Class</h4>
          <span className="text-xs text-secondary font-medium">
            {t("goal")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TrainingStats;
