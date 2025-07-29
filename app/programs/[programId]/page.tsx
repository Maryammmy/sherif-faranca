import Background from "@/components/program/Background";
import Content from "@/components/program/content/Content";

async function Program({ params }: { params: Promise<{ programId: string }> }) {
  const { programId } = await params;
  return (
    <>
      <Background href="/" />
      <Content programId={programId} />
    </>
  );
}

export default Program;
