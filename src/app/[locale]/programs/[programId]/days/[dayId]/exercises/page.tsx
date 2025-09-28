import ExercisesComponent from "@/src/components/program/exercises";

export default async function Exercises({
  params,
}: {
  params: Promise<{ programId: string; dayId: string }>;
}) {
  const { programId, dayId } = await params;
  return (
    <>
      <ExercisesComponent programId={programId} dayId={dayId} />
    </>
  );
}
