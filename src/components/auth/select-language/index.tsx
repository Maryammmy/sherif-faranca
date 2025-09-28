"use client";

import { Button } from "@/src/components/ui/Button";
import { languages } from "@/src/data";
import { cn } from "@/src/lib/utils";
import Image from "@/src/components/ui/Image";
import { useRouter } from "@/src/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function SelectLanguage() {
  const t = useTranslations("selectLanguage");
  const locale = useLocale();
  const router = useRouter();

  const [selected, setSelected] = useState(locale);

  // Handle language selection
  const handleLanguageSelect = (langCode: string) => {
    setSelected(langCode);
  };

  // Handle Next button: change locale and navigate
  const handleNext = () => {
    if (selected !== locale) {
      router.push("/select-method", { locale: selected }); // change locale
      router.refresh(); // refresh translations
    } else {
      router.push("/select-method");
    }
  };

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      {/* Left Side */}
      <div className="w-full max-w-lg">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-11 mb-3">
            {t("choose")}
          </h1>
        </header>
        <p className="text-gray-400 font-medium mb-8">{t("description")}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          {languages.map((lang) => (
            <Button
              onClick={() => handleLanguageSelect(lang.code)}
              key={lang.code}
              className={cn(
                "flex flex-col gap-3 items-center border rounded-xl px-8 py-4 sm:w-32 transition-all duration-150",
                selected === lang.code
                  ? "border-[#5B2E9D] shadow-lg"
                  : "border-gray-200"
              )}
            >
              <div>
                <Image
                  src={lang.flag}
                  alt={`${lang.label} flag`}
                  width={100}
                  height={100}
                />
              </div>
              <span className="font-semibold text-gray-700 text-lg">
                {t(lang.label)}
              </span>
            </Button>
          ))}
        </div>
        <Button
          className="w-full bg-primary text-white py-3 rounded-lg font-medium mt-2 mb-8"
          onClick={handleNext}
        >
          {t("next")}
        </Button>
      </div>
      {/* Right Side */}
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image
          src="/select-language.png"
          alt="Select Language Illustration"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
