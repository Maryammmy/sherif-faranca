"use client";
import { useProgramDay } from "@/src/hooks";
import Background from "../Background";
import DayExercises from "./DayExercises";
import { IProgramBackground, IProgramDay } from "@/src/interfaces/program";
import { SingleSkeletonCard, SkeletonCard } from "../../skeleton/Card";

interface IProps {
  programId: string;
  dayId: string;
}
function Exercises({ programId, dayId }: IProps) {
  const { data } = useProgramDay(dayId);
  const programDay: IProgramDay = data?.data;
  const programBackground: IProgramBackground = {
    id: programDay?.programId,
    imageUrl: programDay?.programImageUrl,
    isFavorite: programDay?.isFavorite,
  };
  console.log(data);
  return (
    <>
      {!data ? (
        <>
          <div className="background-layout">
            <SingleSkeletonCard className="h-full w-full" />
          </div>
          <div className="program-layout">
            <div className="pb-5 flex flex-col gap-4 max-w-sm">
              <SkeletonCard count={2} className="h-6" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
              <SkeletonCard count={5} />
            </div>
          </div>
        </>
      ) : (
        <>
          <Background
            href={`/programs/${programId}/select-day`}
            programBackground={programBackground}
            queryKey={["programDay", dayId]}
          />
          <DayExercises programId={programId} dayId={dayId} data={programDay} />
        </>
      )}
    </>
  );
}

export default Exercises;
