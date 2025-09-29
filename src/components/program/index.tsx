"use client";
import { useProgram } from "@/src/hooks";
import Background from "./Background";
import Content from "./Content";
import { IProgram, IProgramBackground } from "@/src/interfaces/program";

interface IProps {
  programId: string;
}
function Program({ programId }: IProps) {
  const { data } = useProgram(programId);
  const program: IProgram = data?.data;
  const programBackground: IProgramBackground = {
    id: program?.id,
    title: program?.title,
    category: program?.category,
    level: program?.level,
    timeTotal: program?.timetotal,
    imageUrl: program?.imageUrl,
    isFavorite: program?.isFavorite,
  };
  return (
    <>
      {!data ? null : (
        <>
          {" "}
          <Background
            href="/"
            programBackground={programBackground}
            queryKey={["program", programId]}
          />
          <Content programId={programId} data={program} />
        </>
      )}
    </>
  );
}

export default Program;
