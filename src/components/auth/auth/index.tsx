import { useTranslations } from "next-intl";
import Image from "@/src/components/ui/Image";
import { Link } from "@/src/i18n/navigation";

function Auth() {
  const t = useTranslations("auth");
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      <div className="space-y-10 w-full max-w-lg">
        <header>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-11 sm:leading-16">
            {t("welcome")} <span className="text-primary">{t("name")}</span>
          </h1>
        </header>
        <div>
          <p className="text-[#ABADB7] font-medium">{t("description")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 sm:gap-10 font-medium">
          <Link
            href="/signin?type=email"
            className="text-white text-center bg-primary p-3 rounded-md flex items-center justify-center"
          >
            {t("signin")}
          </Link>
          <Link
            href="/select-language"
            className="border border-primary text-center text-primary p-3 rounded-md flex items-center justify-center"
          >
            {t("signup")}
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-center lg:items-center">
        <Image src="/auth.png" alt="auth" width={500} height={500} />
      </div>
    </div>
  );
}

export default Auth;
