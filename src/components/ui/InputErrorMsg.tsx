import { useTranslations } from "next-intl";

interface IProps {
  msg?: string;
  key?: string;
}
const InputErrorMessage = ({ msg, key = "form" }: IProps) => {
  const t = useTranslations(key);
  return msg ? (
    <span className="block text-red-700 text-sm">{t(msg)}</span>
  ) : null;
};

export default InputErrorMessage;
