"use client";
import SettingsPanelCard from "./Card";
import { useState } from "react";
import PersonalInformation from "../account/personal-information";
import { account } from "@/src/data/main/settings";
import GoalsPanel from "../account/goals/goals-panel";
import { useTranslations } from "next-intl";

function AccountSection() {
  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);
  const [goalsOpen, setGoalsOpen] = useState(false);
  const t = useTranslations();

  return (
    <>
      <div className="settings-panel-section">
        <div>
          <h3 className="setting-panel-section-heading">
            {t("settings.account.title")}
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          {account.map((item) => (
            <SettingsPanelCard
              key={item.label}
              setting={item}
              {...(t(item.label) ===
                t("settings.account.personalInformation") && {
                handleOpenPersonalInfo: () => setPersonalInfoOpen(true),
              })}
              {...(t(item.label) === t("settings.account.myGoal") && {
                handleOpenGoals: () => setGoalsOpen(true),
              })}
            />
          ))}
        </div>
      </div>
      <PersonalInformation
        open={personalInfoOpen}
        onClose={() => setPersonalInfoOpen(false)}
      />
      <GoalsPanel open={goalsOpen} onClose={() => setGoalsOpen(false)} />
    </>
  );
}

export default AccountSection;
