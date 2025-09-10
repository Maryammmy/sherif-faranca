"use client";
import { IFilters, IDuration } from "@/src/interfaces/filters";
import Durations from "./Durations";
import FilterBodyFocusArea from "./FilterBodyFocusArea";
import IWouldLikeTo from "./IWouldLikeTo";
import Levels from "./Levels";
import WorkoutPrefer from "./WorkoutPrefer";
import { useFilters } from "@/src/hooks";
import { Link } from "@/src/i18n/navigation";
import { MoveLeft } from "lucide-react";
import ApplyFilters from "./ApplyFilters";
import { useState } from "react";
import { SkeletonCard } from "../skeleton/Card";

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

  if (!data)
    return (
      <div className="padding-layout space-y-5">
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center">
          <SkeletonCard count={6} className="w-20 h-20 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          <SkeletonCard count={3} className="h-[200px]" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          <SkeletonCard count={6} className="h-10" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          <SkeletonCard count={6} className="h-10" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          <SkeletonCard count={3} className="h-10" />
        </div>
        <div>
          <SkeletonCard count={1} className="h-10 sm:w-50" />
        </div>
      </div>
    );

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
      <WorkoutPrefer
        whatWorkoutPrefer={whatWorkOutPrefer}
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
