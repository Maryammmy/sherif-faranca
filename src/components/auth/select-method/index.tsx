import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Link } from "@/src/i18n/navigation";
import SocialButtons from "./SocialButtons";
import { useTranslations } from "next-intl";

export default function SelectMethod() {
  const t = useTranslations("selectMethod");
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      {/* Left Side */}
      <div className="space-y-2 w-full max-w-lg">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 leading-11 max-w-[529px]">
            {t("register")} <span className="text-primary">{t("change")}</span>
          </h1>
        </header>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8">
          {t("start")}
        </h2>
        <div className="flex flex-col gap-5 pb-6">
          <Link
            href="/signup?type=email"
            className="w-full bg-primary text-white py-3 rounded-lg font-medium flex items-center justify-center gap-4"
          >
            <Mail className="w-5 h-5" />
            <span>{t("email")}</span>
          </Link>
          <Link
            href="/signup?type=number"
            className="w-full border border-primary text-primary py-3 rounded-lg font-medium flex items-center justify-center gap-4"
          >
            <Phone className="w-5 h-5" />
            <span>{t("number")}</span>
          </Link>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-sm">{t("or")}</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <SocialButtons />
        <div className="text-center text-gray-400 mb-8">
          {t("account")}{" "}
          <Link
            href="/signin?type=email"
            className="text-primary font-semibold hover:underline"
          >
            {t("signin")}
          </Link>
        </div>
      </div>
      {/* Right Side */}
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image
          src="/signup.png"
          alt="Sign Up Illustration"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
