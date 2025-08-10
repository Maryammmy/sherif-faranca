"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";

interface IProps {
  backHref: string;
  nextHref: string;
  isNextDisabled?: boolean;
}
function NextAndBackButtons({ backHref, nextHref, isNextDisabled }: IProps) {
  const router = useRouter();
  const handleNextClick = () => {
    router.push(nextHref);
  };
  return (
    <div>
      <div className="border-2 w-full"></div>
      <div className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-center p-5">
        <Link
          href={backHref}
          className="text-center border border-primary text-primary font-medium py-2.5 w-full sm:w-40 rounded"
        >
          Back
        </Link>
        <Button
          disabled={isNextDisabled}
          onClick={handleNextClick}
          className="text-center bg-primary disabled:cursor-not-allowed disabled:bg-gray-200 text-white font-medium py-2.5 w-full sm:w-40 rounded"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default NextAndBackButtons;
