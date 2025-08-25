"use client";
import { IFilters, IDuration } from "@/src/interfaces/filters";
import Durations from "./Durations";
import FilterBodyFocusArea from "./FilterBodyFocusArea";
import IWouldLikeTo from "./IWouldLikeTo";
import Levels from "./Levels";
import WhatWorkOutPrefer from "./WhatWorkOutPrefer";
import { useFilters } from "@/src/hooks";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import ApplyFilters from "./ApplyFilters";
import { useState } from "react";

function Filters() {
  const { data } = useFilters();

  // State لكل filter
  const [filterBodyFoucsAreaIds, setFilterBodyFoucsAreaIds] = useState<
    number[]
  >([]);
  const [i_dLikeToId, setILikeToId] = useState<number | null>(null);
  const [whatWorkOutPreferIds, setWhatWorkOutPreferIds] = useState<number[]>(
    []
  );
  const [duration, setDuration] = useState<IDuration | null>(null);
  const [levelId, setLevelId] = useState<number | null>(null);

  if (!data) return null;

  const {
    filterBodyFocsArea,
    i_dLikeTo,
    whatWorkOutPrefer,
    durationRanges,
    levels,
  }: IFilters = data;

  // ------- Handlers --------
  const handleSelectBodyFocusArea = (id: number) => {
    setFilterBodyFoucsAreaIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSelectWorkOutPrefer = (id: number) => {
    setWhatWorkOutPreferIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSelectLikeTo = (id: number) => {
    setILikeToId(id);
  };

  const handleSelectDuration = (value: IDuration) => {
    setDuration(value);
  };

  const handleSelectLevel = (id: number) => {
    setLevelId(id);
  };
  const payload = {
    filterBodyFocsAreaIds: filterBodyFoucsAreaIds,
    i_dLikeToId,
    whatWorkOutPreferIds,
    minDurationMinutes: duration?.minDuration ?? null,
    maxDurationMinutes: duration?.maxDuration ?? null,
    levelId,
  };
  const isAllEmpty =
    filterBodyFoucsAreaIds.length === 0 &&
    !i_dLikeToId &&
    whatWorkOutPreferIds.length === 0 &&
    !duration &&
    !levelId;

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

      <FilterBodyFocusArea
        filterBodyFocusArea={filterBodyFocsArea}
        value={filterBodyFoucsAreaIds}
        onChange={handleSelectBodyFocusArea}
      />

      <IWouldLikeTo
        iWouldLikeTo={i_dLikeTo}
        value={i_dLikeToId}
        onChange={handleSelectLikeTo}
      />

      <WhatWorkOutPrefer
        whatWorkOutPrefer={whatWorkOutPrefer}
        value={whatWorkOutPreferIds}
        onChange={handleSelectWorkOutPrefer}
      />

      <Durations
        durations={durationRanges}
        value={duration}
        onChange={handleSelectDuration}
      />

      <Levels levels={levels} value={levelId} onChange={handleSelectLevel} />

      <ApplyFilters filters={payload} isDisabled={isAllEmpty} />
    </div>
  );
}

export default Filters;
