import { MoveLeft, MoveRight } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("workouts");
  const locale = useLocale();
  const isAr = locale === "ar";
  const MoveIcon = isAr ? MoveRight : MoveLeft;
  return (
    <div className="flex items-center justify-between gap-5 text-gray-700">
      <Link href="/">
        <MoveIcon className="sm:size-10" />
      </Link>
      <header className="flex-grow text-center text-lg sm:text-4xl font-bold">
        <h1>{t("title")}</h1>
      </header>
    </div>
  );
}

export default Header;
