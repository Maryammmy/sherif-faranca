import ExerciseComponent from "@/src/components/program/exercises/exercise";

export default async function Exercise({
  params,
}: {
  params: Promise<{
    programId: string;
    exerciseId: string;
    dayId: string;
  }>;
}) {
  const { programId, exerciseId, dayId } = await params;
  return (
    <>
      <ExerciseComponent
        programId={programId}
        exerciseId={exerciseId}
        dayId={dayId}
      />
    </>
  );
}
