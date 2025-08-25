import NextAndBackButtons from "@/src/components/questions/NextAndBackButtons";
import ProgressSteps from "@/src/components/questions/ProgressSteps";
import { IColoredText } from "@/src/interfaces/questions";
import { ReactNode } from "react";
import ContentResult from "./ContentResult";

type Props = {
  progresses: number[];
  img: string;
  title: string;
  coloredTitle: Partial<Record<keyof IColoredText, string>>;
  description: ReactNode;
  backHref: string;
  nextHref: string;
};

function Result({
  progresses,
  img,
  title,
  coloredTitle,
  description,
  backHref,
  nextHref,
}: Props) {
  return (
    <div className="min-h-screen">
      <div className="padding-layout">
        <ProgressSteps progresses={progresses} />
        <ContentResult
          img={img}
          title={title}
          coloredTitle={coloredTitle}
          description={description}
        />
      </div>
      <NextAndBackButtons backHref={backHref} nextHref={nextHref} />
    </div>
  );
}

export default Result;
