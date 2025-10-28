import { Button } from "@/src/components/ui/Button";
import { ISetting } from "@/src/interfaces/main/settings";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

interface IProps {
  setting: ISetting;
  handleOpenPersonalInfo?: () => void;
  handleOpenChangeLanguage?: () => void;
  handleOpenChangePassword?: () => void;
  handleOpenChangeEmail?: () => void;
  handleOpenChangePhone?: () => void;
  handleOpenGoals?: () => void;
  handleOpenFaq?: () => void;
}

function SettingsPanelCard({
  setting,
  handleOpenChangeLanguage,
  handleOpenPersonalInfo,
  handleOpenChangePassword,
  handleOpenChangeEmail,
  handleOpenChangePhone,
  handleOpenGoals,
  handleOpenFaq,
}: IProps) {
  const { icon: Icon, label, href } = setting;
  const locale = useLocale();
  const isAr = locale === "ar";
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;
  const t = useTranslations();
  const handleClick = () => {
    if (
      t(label) === t("settings.account.personalInformation") &&
      handleOpenPersonalInfo
    ) {
      handleOpenPersonalInfo();
    } else if (
      t(label) === t("settings.settings.language") &&
      handleOpenChangeLanguage
    ) {
      handleOpenChangeLanguage();
    } else if (
      t(label) === t("settings.settings.changePassword") &&
      handleOpenChangePassword
    ) {
      handleOpenChangePassword();
    } else if (
      t(label) === t("settings.settings.changeEmail") &&
      handleOpenChangeEmail
    ) {
      handleOpenChangeEmail();
    } else if (
      t(label) === t("settings.settings.changePhoneNumber") &&
      handleOpenChangePhone
    ) {
      handleOpenChangePhone();
    } else if (t(label) === t("settings.account.myGoal") && handleOpenGoals) {
      handleOpenGoals();
    } else if (t(label) === t("settings.settings.faq") && handleOpenFaq) {
      handleOpenFaq();
    }
  };

  return (
    <>
      {href ? (
        <Link
          href={href}
          onClick={handleClick}
          className="flex items-center gap-2 capitalize"
        >
          <div className="shrink-0 w-8 h-8 rounded-md flex justify-center items-center bg-gray-100 text-[#9B8AFB]">
            <Icon />
          </div>
          <span className="flex-grow text-xs sm:text-base font-medium text-gray-700 text-start">
            {t(label)}
          </span>
          <span className="text-secondary">
            <ChevronIcon />
          </span>
        </Link>
      ) : (
        <Button
          onClick={handleClick}
          className="flex items-center gap-2 capitalize"
        >
          <div className="shrink-0 w-8 h-8 rounded-md flex justify-center items-center bg-gray-100 text-[#9B8AFB]">
            <Icon />
          </div>
          <span className="flex-grow text-xs sm:text-base font-medium text-gray-700 text-start">
            {t(label)}
          </span>
          <span className="text-secondary">
            <ChevronIcon />
          </span>
        </Button>
      )}
    </>
  );
}

export default SettingsPanelCard;
