import ProgramComponent from "@/src/components/program";

async function Program({ params }: { params: Promise<{ programId: string }> }) {
  const { programId } = await params;
  return (
    <>
      <ProgramComponent programId={programId} />
    </>
  );
}

export default Program;
