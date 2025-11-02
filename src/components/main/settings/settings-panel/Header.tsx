import { SkeletonCard } from "@/src/components/skeleton/Card";
import { CloseButtonPanel } from "@/src/components/ui/Panel";
import { useProfile } from "@/src/hooks";
import Image from "@/src/components/ui/Image";
import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("settings");
  const { data } = useProfile();
  console.log(data);
  if (!data)
    return (
      <div className="flex items-center gap-2 py-5 sm:py-10 px-2.5">
        <CloseButtonPanel closeButtonClassname="text-white border-white" />
        <SkeletonCard count={1} className="w-10 h-10 rounded-full shrink-0" />
        <div className="flex flex-col gap-2">
          <SkeletonCard count={1} className="h-4 w-20" />
          <SkeletonCard count={1} className="h-4 w-40" />
        </div>
      </div>
    );
  const { firstName, email, picture } = data?.data;
  return (
    <div className="flex items-center gap-2 py-5 sm:py-10 px-2.5">
      <CloseButtonPanel closeButtonClassname="text-white border-white" />
      <div className="shrink-0 relative w-8 h-8 rounded-full overflow-hidden">
        <Image
          src={picture}
          alt="user"
          className="object-cover"
          fill
          sizes="32px"
          defaultImage="/user-round.svg"
        />
      </div>
      <div className="flex flex-col gap-2 text-white">
        <h2 className="text-xs sm:text-lg font-bold leading-none capitalize">
          {t("welcome")} {firstName}
        </h2>
        <p className="font-medium text-xs sm:text-base leading-none break-all">
          {email}
        </p>
      </div>
    </div>
  );
}

export default Header;
