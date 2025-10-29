import { MoveLeft, MoveRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

function Header() {
  const t = useTranslations("discoverPrograms");
  const locale = useLocale();
  const isAr = locale === "ar";
  const MoveIcon = isAr ? MoveRight : MoveLeft;
  return (
    <div className="flex justify-between items-center gap-2 text-gray-700 pb-5">
      <Link href="/">
        <MoveIcon className="size-6" />
      </Link>
      <header className="flex-1 flex justify-center">
        <h1 className="font-bold text-lg sm:text-2xl">{t("title")}</h1>
      </header>
    </div>
  );
}

export default Header;
