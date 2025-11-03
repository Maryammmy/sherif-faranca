import { ChangePhone } from "@/src/schemas/main/settings/change-phone";
import { useTranslations } from "next-intl";

interface IProps {
  newPhone: ChangePhone;
}
function Content({ newPhone }: IProps) {
  const t = useTranslations("changePhoneNumber.verifyPhoneNumber");
  const { countryCode, phoneNumber } = newPhone;
  return (
    <p className="font-medium text-secondary text-center">
      {t("sendVerificationCode")}{" "}
      <span
        className="text-primary"
        dir="ltr"
      >{`+${countryCode}${phoneNumber}`}</span>{" "}
      {t("checkPhoneNumber")}
    </p>
  );
}

export default Content;
