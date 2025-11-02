import { CloseButtonModal } from "@/src/components/ui/Modal";
import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("personalInfo");
  return (
    <div className="padding-layout">
      <CloseButtonModal closeButtonClassname="text-white border-white" />
      <h3 className="sm:text-lg font-bold text-white text-center">
        {t("title")}
      </h3>
    </div>
  );
}

export default Header;
