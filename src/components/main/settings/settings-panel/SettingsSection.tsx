"use client";
import { settings } from "@/src/data/main/settings";
import SettingsPanelCard from "./Card";
import { useState } from "react";
import ChangePassword from "../settings/change-password";
import ChangeEmail from "../settings/change-email";
import ChangePhone from "../settings/change-phone";
import Language from "../settings/language";
import Faq from "../settings/faq";
import { useTranslations } from "next-intl";

function SettingsSection() {
  const [changeLanguage, setChangeLanguageOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [changeEmailOpen, setChangeEmailOpen] = useState(false);
  const [changePhoneOpen, setChangePhoneOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const t = useTranslations();
  return (
    <>
      <div className="settings-panel-section">
        <div>
          <h3 className="setting-panel-section-heading">
            {t("settings.settings.title")}
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          {settings.map((item) => (
            <SettingsPanelCard
              key={item.label}
              setting={item}
              {...(t(item.label) === t("settings.settings.language") && {
                handleOpenChangeLanguage: () => setChangeLanguageOpen(true),
              })}
              {...(t(item.label) === t("settings.settings.changePassword") && {
                handleOpenChangePassword: () => setChangePasswordOpen(true),
              })}
              {...(t(item.label) === t("settings.settings.changeEmail") && {
                handleOpenChangeEmail: () => setChangeEmailOpen(true),
              })}
              {...(t(item.label) ===
                t("settings.settings.changePhoneNumber") && {
                handleOpenChangePhone: () => setChangePhoneOpen(true),
              })}
              {...(t(item.label) === t("settings.settings.faq") && {
                handleOpenFaq: () => setFaqOpen(true),
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
      <Faq open={faqOpen} onClose={() => setFaqOpen(false)} />
    </>
  );
}

export default SettingsSection;
