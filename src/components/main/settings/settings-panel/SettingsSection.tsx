"use client";
import { settings } from "@/src/data/main/settings";
import SettingsPanelCard from "./Card";
import { useState } from "react";
import ChangePassword from "../settings/change-password";
import ChangeEmail from "../settings/change-email";
import ChangePhone from "../settings/change-phone";
import Language from "../settings/language";

function SettingsSection() {
  const [changeLanguage, setChangeLanguageOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [changeEmailOpen, setChangeEmailOpen] = useState(false);
  const [changePhoneOpen, setChangePhoneOpen] = useState(false);
  return (
    <>
      <div className="settings-panel-section">
        <div>
          <h3 className="setting-panel-section-heading">Settings</h3>
        </div>
        <div className="flex flex-col gap-2">
          {settings.map((item) => (
            <SettingsPanelCard
              key={item.label}
              setting={item}
              {...(item.label === "language" && {
                handleOpenChangeLanguage: () => setChangeLanguageOpen(true),
              })}
              {...(item.label === "change password" && {
                handleOpenChangePassword: () => setChangePasswordOpen(true),
              })}
              {...(item.label === "change email" && {
                handleOpenChangeEmail: () => setChangeEmailOpen(true),
              })}
              {...(item.label === "change phone number" && {
                handleOpenChangePhone: () => setChangePhoneOpen(true),
              })}
            />
          ))}
        </div>
      </div>
      <Language
        open={changeLanguage}
        onClose={() => setChangeLanguageOpen(false)}
      />
      <ChangePassword
        open={changePasswordOpen}
        onClose={() => setChangePasswordOpen(false)}
      />
      <ChangeEmail
        open={changeEmailOpen}
        onClose={() => setChangeEmailOpen(false)}
      />
      <ChangePhone
        open={changePhoneOpen}
        onClose={() => setChangePhoneOpen(false)}
      />
    </>
  );
}

export default SettingsSection;
