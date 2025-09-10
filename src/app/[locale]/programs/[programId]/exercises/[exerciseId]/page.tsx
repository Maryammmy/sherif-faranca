import Background from "@/src/components/program/Background";
import ExerciseDetails from "@/src/components/program/exercises/exercise/ExerciseDetails";

export default async function Exercise({
  params,
}: {
  params: Promise<{
    programId: string;
  }>;
}) {
  const { programId } = await params;
  return (
    <>
      <Background href={`/programs/${programId}/exercises`} />
      <ExerciseDetails />
    </>
  );
}
