"use client";

import { useClasses } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";
import { IClass } from "@/src/interfaces/main/home";
import RecommendForYouCard from "./Card";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";

function ClassList() {
  const { data } = useClasses();
  const classList: IClass[] = data?.data?.items;
  return (
    <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5">
      {!data ? (
        <SkeletonCard count={5} />
      ) : classList?.length ? (
        classList.map((classicClass) => (
          <RecommendForYouCard
            key={classicClass?.programDayId}
            classicClass={classicClass}
          />
        ))
      ) : (
        <EmptyStatePage message="No classic classes found" />
      )}
    </div>
  );
}

export default ClassList;
