import { MoveLeft, MoveRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

function Header() {
  const t = useTranslations("step");
  const locale = useLocale();
  const isAr = locale === "ar";
  const MoveIcon = isAr ? MoveRight : MoveLeft;
  return (
    <div className="flex justify-between items-center gap-2 text-gray-700 pb-5">
      <Link href="/">
        <MoveIcon className="sm:size-10" />
      </Link>
      <header className="flex-1 flex justify-center">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          {t("title")}
        </h1>
      </header>
    </div>
  );
}

export default Header;
