"use client";
import { useProgramExercise } from "@/src/hooks";
import Background from "../../Background";
import ExerciseDetails from "./ExerciseDetails";
import { IProgramBackground } from "@/src/interfaces/program";

interface IProps {
  programId: string;
  exerciseId: string;
  dayId: string;
}
function Exercise({ programId, exerciseId, dayId }: IProps) {
  const { data } = useProgramExercise(exerciseId);
  const exercise = data?.data;
  const programBackground: IProgramBackground = {
    title: exercise?.programTitle,
    category: exercise?.category,
    level: exercise?.level,
    timeTotal: exercise?.timetotal,
    imageUrl: exercise?.programImageUrl,
    isFavorite: exercise?.isFavorite,
  };
  console.log(data);
  return (
    <>
      {!data ? null : (
        <>
          <Background
            href={`/programs/${programId}/days/${dayId}/exercises`}
            programBackground={programBackground}
          />
          <ExerciseDetails data={exercise} />
        </>
      )}
    </>
  );
}

export default Exercise;
