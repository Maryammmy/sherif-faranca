"use client";
import RecommendCard from "./RecommendCard";
import SwiperSlider from "../../ui/SwiperSlider";
import { EmptyState } from "../../ui/empty-state/EmptyState";
import Link from "next/link";
import { ISuggestion } from "@/src/interfaces/program";
import { ProgramBreakpoints } from "@/src/data";

interface IProps {
  suggestions: ISuggestion[];
}
export default function RecommendForYou({ suggestions }: IProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-800 text-xl font-semibold">
          Recommend For You
        </h2>
        <Link
          href="/recommend-for-you"
          className="border-b border-secondary text-secondary font-medium"
        >
          <span>View All</span>
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
          <EmptyState message="No recommended for you found" />
        )}
      </div>
    </div>
  );
}
