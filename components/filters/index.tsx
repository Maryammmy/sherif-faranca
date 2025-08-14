"use client";
import { IFilters } from "@/interfaces/filters";
import Durations from "./Durations";
import FilterBodyFocusArea from "./FilterBodyFocusArea";
import IWouldLikeTo from "./IWouldLikeTo";
import Levels from "./Levels";
import WhatWorkOutPrefer from "./WhatWorkOutPrefer";
import { useFilters } from "@/hooks";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

function Filters() {
  const { data } = useFilters();
  if (!data) return null;
  const {
    filterBodyFocsArea,
    i_dLikeTo,
    whatWorkOutPrefer,
    durationRanges,
    levels,
  }: IFilters = data;
  return (
    <div className="padding-layout">
      <div className="flex justify-between items-center gap-2 text-gray-700 pb-5">
        <Link href="/">
          <MoveLeft className="size-6" />
        </Link>
        <header className="flex-1 flex justify-center">
          <h1 className="font-bold text-lg sm:text-2xl">Filters</h1>
        </header>
      </div>
      <FilterBodyFocusArea filterBodyFocusArea={filterBodyFocsArea} />
      <IWouldLikeTo iWouldLikeTo={i_dLikeTo} />
      <WhatWorkOutPrefer whatWorkOutPrefer={whatWorkOutPrefer} />
      <Durations durations={durationRanges} />
      <Levels levels={levels} />
    </div>
  );
}

export default Filters;
