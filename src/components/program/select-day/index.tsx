"use client";
import { useProgramCalender } from "@/src/hooks";
import Background from "../Background";
import SelectDay from "./SelectDay";
import { IProgramBackground, IProgramDays } from "@/src/interfaces/program";
import { SingleSkeletonCard, SkeletonCard } from "../../skeleton/Card";

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
      {!data ? (
        <>
          <div className="background-layout">
            <SingleSkeletonCard className="h-full w-full rounded-none" />
          </div>
          <div className="program-layout">
            <div className="pb-5 md:pb-10 grid grid-cols-7 gap-5">
              <SkeletonCard
                count={21}
                className="size-7 md:size-20 rounded-full md:rounded-lg"
              />
            </div>
            <SingleSkeletonCard className="h-12 md:w-55" />
          </div>
        </>
      ) : (
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
