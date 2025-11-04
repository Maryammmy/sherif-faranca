import { useTranslations } from "next-intl";

interface IProps {
  newEmail: string;
}
function Content({ newEmail }: IProps) {
  const t = useTranslations("changeEmail.verifyEmail");
  return (
    <p className="font-medium text-secondary text-center">
      {t("sendVerificationCode")}{" "}
      <span className="text-primary">{newEmail}</span> {t("checkEmail")}
    </p>
  );
}

export default Content;
