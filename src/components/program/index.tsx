"use client";
import { useProgram } from "@/src/hooks";
import Background from "./Background";
import Content from "./Content";
import { IProgram, IProgramBackground } from "@/src/interfaces/program";
import { SingleSkeletonCard, SkeletonCard } from "../skeleton/Card";

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
      {!data ? (
        <>
          <div className="background-layout">
            <SingleSkeletonCard className="h-full w-full rounded-none" />
          </div>
          <div className="program-layout">
            <div className="flex flex-col gap-6">
              <SkeletonCard count={3} className="h-20" />
            </div>
          </div>
        </>
      ) : (
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
