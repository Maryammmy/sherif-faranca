import SuggestedProgramCard from "./Card";
import { ISuggestedProgram } from "@/src/interfaces/main/discover";
import { SkeletonCard } from "@/src/components/skeleton/Card";
import { EmptyStatePage } from "@/src/components/ui/empty-state/EmptyStatePage";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface IProps {
  programs: ISuggestedProgram[] | undefined;
}
function SuggestedPrograms({ programs }: IProps) {
  const t = useTranslations("discover.suggestedPrograms");
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-700 text-lg font-semibold capitalize">
          {t("title")}
        </h2>
        <Link
          href="/discover-programs"
          className="border-b border-secondary text-secondary font-medium"
        >
          <span>{t("viewAll")}</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-5">
        {!programs ? (
          <SkeletonCard count={4} />
        ) : programs?.length ? (
          programs?.map((program) => (
            <SuggestedProgramCard key={program?.id} program={program} />
          ))
        ) : (
          <EmptyStatePage message={t("noProgramsFound")} />
        )}
      </div>
    </div>
  );
}

export default SuggestedPrograms;
