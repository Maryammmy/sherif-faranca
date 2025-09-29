"use client";
import { useProgramCalender } from "@/src/hooks";
import Background from "../Background";
import SelectDay from "./SelectDay";
import { IProgramBackground, IProgramDays } from "@/src/interfaces/program";

interface IProps {
  programId: string;
}
function ProgramDays({ programId }: IProps) {
  const { data } = useProgramCalender(programId);
  console.log(data);
  const programDays: IProgramDays = data?.data;
  const programBackground: IProgramBackground = {
    id: programDays?.id,
    title: programDays?.title,
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
            queryKey={["programCalender", programId]}
          />
          <SelectDay programId={programId} data={programDays} />
        </>
      )}
    </>
  );
}

export default ProgramDays;
