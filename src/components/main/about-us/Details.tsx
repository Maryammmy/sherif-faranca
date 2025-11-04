import { IAboutUs } from "@/src/interfaces/main/services";
import { useTranslations } from "next-intl";

interface IProps {
  data: IAboutUs;
}
export default function Details({ data }: IProps) {
  const t = useTranslations("aboutUs");
  const { description, title, version } = data;
  return (
    <div className="p-6">
      <h2 className="text-lg md:text-xl font-extrabold text-[#3e1492]">
        <span className="text-gray-900">{title}</span>
      </h2>
      <div className="mt-3 space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <p className="text-sm text-secondary font-medium">
          {t("version")} {version}
        </p>
      </div>
    </div>
  );
}
