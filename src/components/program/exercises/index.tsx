"use client";
import { useProgramDay } from "@/src/hooks";
import Background from "../Background";
import DayExercises from "./DayExercises";
import { IProgramBackground } from "@/src/interfaces/program";

interface IProps {
  programId: string;
  dayId: string;
}
function Exercises({ programId, dayId }: IProps) {
  const { data } = useProgramDay(dayId);
  const programDay = data?.data;
  const programBackground: IProgramBackground = {
    title: programDay?.programTitle,
    category: programDay?.category,
    level: programDay?.level,
    timeTotal: programDay?.timetotal,
    imageUrl: programDay?.programImageUrl,
    isFavorite: programDay?.isFavorite,
  };
  console.log(data);
  return (
    <>
      {!data ? null : (
        <>
          <Background
            href={`/programs/${programId}/select-day`}
            programBackground={programBackground}
          />
          <DayExercises programId={programId} dayId={dayId} data={programDay} />
        </>
      )}
    </>
  );
}

export default Exercises;
