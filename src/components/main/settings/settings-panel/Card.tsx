import { Button } from "@/src/components/ui/Button";
import { ISetting } from "@/src/interfaces/main/settings";
import { ChevronRight } from "lucide-react";
import { Link } from "@/src/i18n/navigation";

interface IProps {
  setting: ISetting;
  handleOpenPersonalInfo?: () => void;
  handleOpenChangeLanguage?: () => void;
  handleOpenChangePassword?: () => void;
  handleOpenChangeEmail?: () => void;
  handleOpenChangePhone?: () => void;
  handleOpenGoals?: () => void;
}

function SettingsPanelCard({
  setting,
  handleOpenChangeLanguage,
  handleOpenPersonalInfo,
  handleOpenChangePassword,
  handleOpenChangeEmail,
  handleOpenChangePhone,
  handleOpenGoals,
}: IProps) {
  const { icon: Icon, label, href } = setting;
  const handleClick = () => {
    if (label === "personal information" && handleOpenPersonalInfo) {
      handleOpenPersonalInfo();
    } else if (label === "language" && handleOpenChangeLanguage) {
      handleOpenChangeLanguage();
    } else if (label === "change password" && handleOpenChangePassword) {
      handleOpenChangePassword();
    } else if (label === "change email" && handleOpenChangeEmail) {
      handleOpenChangeEmail();
    } else if (label === "change phone number" && handleOpenChangePhone) {
      handleOpenChangePhone();
    } else if (label === "my goal" && handleOpenGoals) {
      handleOpenGoals();
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
            {label}
          </span>
          <span className="text-secondary">
            <ChevronRight />
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
            {label}
          </span>
          <span className="text-secondary">
            <ChevronRight />
          </span>
        </Button>
      )}
    </>
  );
}

export default SettingsPanelCard;
