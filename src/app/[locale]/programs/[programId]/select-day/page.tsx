import ProgramDaysComponent from "@/src/components/program/select-day";

async function ProgramDays({
  params,
}: {
  params: Promise<{ programId: string }>;
}) {
  const { programId } = await params;
  return (
    <>
      <ProgramDaysComponent programId={programId} />
    </>
  );
}

export default ProgramDays;
