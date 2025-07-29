import { IColoredText } from "@/interfaces/questions";
import Image from "next/image";
import { ReactNode } from "react";
type Props = {
  img: string;
  title: string;
  coloredTitle: Partial<Record<keyof IColoredText, string>>;
  description: ReactNode;
};

function ContentResult({ img, title, coloredTitle, description }: Props) {
  return (
    <div className="questions-layout">
      <div className="pt-6 space-y-4">
        <div className="flex justify-center items-center">
          <Image src={`/${img}.png`} alt={img} width={300} height={300} />
        </div>
        <header>
          <h1 className="uppercase text-gray-700 text-2xl sm:text-4xl font-bold leading-11 sm:leading-14 sm:text-center max-w-lg">
            {coloredTitle?.firstColoredText && (
              <span className="text-primary">
                {coloredTitle?.firstColoredText}
              </span>
            )}{" "}
            {title}{" "}
            {coloredTitle?.lastColoredText && (
              <span className="text-primary">
                {coloredTitle?.lastColoredText}
              </span>
            )}
          </h1>
        </header>
        <div className="max-w-md mx-auto">
          <p className="capitalize text-gray-400 font-medium sm:text-lg sm:text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentResult;
