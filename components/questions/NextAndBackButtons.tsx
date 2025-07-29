import Link from "next/link";

interface IProps {
  backHref: string;
  nextHref: string;
}
function NextAndBackButtons({ backHref, nextHref }: IProps) {
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
        <Link
          href={nextHref}
          className="text-center bg-primary text-white font-medium py-2.5 w-full sm:w-40 rounded"
        >
          Next
        </Link>
      </div>
    </div>
  );
}

export default NextAndBackButtons;
