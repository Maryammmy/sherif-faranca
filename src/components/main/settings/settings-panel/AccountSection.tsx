"use client";
import SettingsPanelCard from "./Card";
import { useState } from "react";
import PersonalInformation from "../account/personal-information";
import { account } from "@/src/data/main/settings";
import GoalsPanel from "../account/goals/goals-panel";

function AccountSection() {
  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);
  const [goalsOpen, setGoalsOpen] = useState(false);
  return (
    <>
      <div className="settings-panel-section">
        <div>
          <h3 className="setting-panel-section-heading">My Account</h3>
        </div>
        <div className="flex flex-col gap-2">
          {account.map((item) => (
            <SettingsPanelCard
              key={item.label}
              setting={item}
              {...(item.label === "personal information" && {
                handleOpenPersonalInfo: () => setPersonalInfoOpen(true),
              })}
              {...(item.label === "my goal" && {
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
