import Background from "@/components/program/Background";
import DayExercises from "@/components/program/exercises/DayExercises";

export default async function Exercises({
  params,
}: {
  params: Promise<{ programId: string }>;
}) {
  const { programId } = await params;
  return (
    <>
      <Background href={`/programs/${programId}/select-day`} />
      <DayExercises programId={programId} />
    </>
  );
}
