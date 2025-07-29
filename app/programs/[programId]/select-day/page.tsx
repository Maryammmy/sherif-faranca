import Background from "@/components/program/Background";
import SelectDay from "@/components/program/select-day/SelectDay";

async function ProgramDays({
  params,
}: {
  params: Promise<{ programId: string }>;
}) {
  const { programId } = await params;
  return (
    <>
      <Background href={`/programs/${programId}`} />
      <SelectDay programId={programId} />
    </>
  );
}

export default ProgramDays;
