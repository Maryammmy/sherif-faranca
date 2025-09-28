"use client";
import { useProgramCalender } from "@/src/hooks";
import Background from "../Background";
import SelectDay from "./SelectDay";
import { IProgramBackground } from "@/src/interfaces/program";

interface IProps {
  programId: string;
}
function ProgramDays({ programId }: IProps) {
  const { data } = useProgramCalender(programId);
  console.log(data);
  const programDays = data?.data;
  const programBackground: IProgramBackground = {
    title: programDays?.title,
    category: programDays?.category,
    level: programDays?.level,
    timeTotal: programDays?.timetotal,
    imageUrl: programDays?.imageUrl,
    isFavorite: programDays?.isFavorite,
  };
  return (
    <>
      {!data ? null : (
        <>
          {" "}
          <Background
            href={`/programs/${programId}`}
            programBackground={programBackground}
          />
          <SelectDay programId={programId} data={programDays} />
        </>
      )}
    </>
  );
}

export default ProgramDays;
