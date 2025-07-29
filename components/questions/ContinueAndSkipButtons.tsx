import Link from "next/link";

interface IProps {
  skipHref: string;
  continueHref: string;
}
function ContinueAndSkipButtons({ skipHref, continueHref }: IProps) {
  return (
    <div>
      <div className="border-2 w-full"></div>
      <div className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-center p-5">
        <Link
          href={skipHref}
          className="text-center border border-primary text-primary font-medium py-2.5 w-full sm:w-40 rounded"
        >
          Skip
        </Link>
        <Link
          href={continueHref}
          className="text-center bg-primary text-white font-medium py-2.5 w-full sm:w-40 rounded"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

export default ContinueAndSkipButtons;
