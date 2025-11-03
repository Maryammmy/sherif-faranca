import { SkeletonCard } from "@/src/components/skeleton/Card";
import { usePhone } from "@/src/hooks";
import { ChangePhone } from "@/src/schemas/main/settings/change-phone";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";

function Content() {
  const t = useTranslations("changePhoneNumber");
  const { data } = usePhone();
  if (!data)
    return (
      <div className="flex flex-col items-center gap-1 border-b pb-5">
        <SkeletonCard count={1} className="h-8 w-40" />
      </div>
    );

  const { countryCode, phoneNumber }: ChangePhone = data?.data;

  const hasPhone = countryCode && phoneNumber;

  return (
    <div className="flex flex-col items-center gap-1 border-b pb-5">
      <div className="w-14 h-14 rounded-full flex justify-center items-center bg-primary">
        <Phone className="text-white" />
      </div>

      <span className="text-secondary font-medium">
        {t("currentPhoneNumber")}
      </span>

      <div className="text-center">
        {hasPhone ? (
          <p className="text-gray-600 font-medium leading-none" dir="ltr">
            {`+${countryCode}${phoneNumber}`}
          </p>
        ) : (
          <p className="text-gray-400 italic">{t("noRegisteredPhone")}</p>
        )}
      </div>
    </div>
  );
}
export default Content;
