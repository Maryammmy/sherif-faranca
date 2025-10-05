"use client";
import { useQueryParams } from "@/src/lib/utils";
import { useTranslations } from "next-intl";

function Header() {
  const type = useQueryParams("type");
  const t = useTranslations("signup");
  return (
    <div className="space-y-3">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-11">
          {t("title")}{" "}
          <span className="text-primary">
            {type === "number" ? t("withNumber") : t("withEmail")}
          </span>
        </h1>
      </header>
      <p className="text-gray-400 font-medium">{t("description")}</p>
    </div>
  );
}

export default Header;
