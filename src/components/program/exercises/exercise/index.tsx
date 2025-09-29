"use client";
import { useProgramExercise } from "@/src/hooks";
import Background from "../../Background";
import ExerciseDetails from "./ExerciseDetails";
import { IExerciseDetails, IProgramBackground } from "@/src/interfaces/program";

interface IProps {
  programId: string;
  exerciseId: string;
  dayId: string;
}
function Exercise({ programId, exerciseId, dayId }: IProps) {
  const { data } = useProgramExercise(exerciseId);
  const exercise: IExerciseDetails = data?.data;
  const programBackground: IProgramBackground = {
    id: exercise?.id,
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
            queryKey={["programExercise", exerciseId]}
          />
          <ExerciseDetails data={exercise} />
        </>
      )}
    </>
  );
}

export default Exercise;
