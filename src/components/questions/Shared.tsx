import { ReactNode } from "react";
import NextAndBackButtons from "./NextAndBackButtons";
import ProgressSteps from "./ProgressSteps";
interface IProps {
  progresses: number[];
  title: string;
  coloredTitle: string;
  description?: string;
  content: ReactNode;
  backHref: string;
  nextHref: string;
  isNextDisabled?: boolean;
}
function Shared({
  progresses,
  title,
  coloredTitle,
  description,
  content,
  backHref,
  nextHref,
  isNextDisabled,
}: IProps) {
  return (
    <div className="min-h-screen">
      <div className="padding-layout">
        <ProgressSteps progresses={progresses} />
        <div className="questions-layout">
          <div className="pt-6 space-y-4 sm:space-y-6">
            <header>
              <h1 className="uppercase text-gray-700 text-2xl sm:text-4xl font-bold sm:text-center leading-11">
                {title} <span className="text-primary">{coloredTitle}</span>
              </h1>
            </header>
            {description && (
              <div className="max-w-md mx-auto">
                <p className="text-gray-400 font-medium sm:text-lg sm:text-center">
                  {description}
                </p>
              </div>
            )}
            {content}
          </div>
        </div>
      </div>
      <NextAndBackButtons
        backHref={backHref}
        nextHref={nextHref}
        isNextDisabled={isNextDisabled}
      />
    </div>
  );
}

export default Shared;
