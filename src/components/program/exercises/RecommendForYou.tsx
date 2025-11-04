"use client";
import RecommendCard from "./RecommendCard";
import SwiperSlider from "../../ui/SwiperSlider";
import { EmptyState } from "../../ui/empty-state/EmptyState";
import { Link } from "@/src/i18n/navigation";
import { ISuggestion } from "@/src/interfaces/program";
import { ProgramBreakpoints } from "@/src/data";
import { useTranslations } from "next-intl";

interface IProps {
  suggestions: ISuggestion[];
}
export default function RecommendForYou({ suggestions }: IProps) {
  const t = useTranslations("home.recommendedForYou");
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-800 text-xl font-semibold">{t("title")}</h2>
        <Link
          href="/recommend-for-you"
          className="border-b border-secondary text-secondary font-medium"
        >
          <span>{t("viewAll")}</span>
        </Link>
      </div>
      <div className="py-5">
        {suggestions?.length ? (
          <SwiperSlider
            slides={suggestions?.map((suggestion) => (
              <RecommendCard
                key={suggestion?.programId}
                suggestion={suggestion}
              />
            ))}
            spaceBetween={20}
            pagination={false}
            breakpoints={ProgramBreakpoints}
            loop={false}
          />
        ) : (
          <EmptyState message={t("noRecommendedForYouFound")} />
        )}
      </div>
    </div>
  );
}
