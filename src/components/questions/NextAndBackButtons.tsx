"use client";
import { Link, useRouter } from "@/src/i18n/navigation";
import { Button } from "../ui/Button";
import { useState } from "react";
import { sendPreference } from "@/src/lib/utils";
import Loader from "../loader/Loader";

interface IProps {
  backHref: string;
  nextHref: string;
  isNextDisabled?: boolean;
}
function NextAndBackButtons({ backHref, nextHref, isNextDisabled }: IProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleNextClick = async () => {
    if (nextHref === "/") {
      setLoading(true);
      await sendPreference(router);
      setLoading(false);
    } else {
      router.push(nextHref);
    }
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
          disabled={isNextDisabled || loading}
          onClick={handleNextClick}
          className="text-center bg-primary disabled:cursor-not-allowed disabled:bg-gray-200 text-white font-medium py-2.5 w-full sm:w-40 rounded"
        >
          {loading ? <Loader borderColor="#3e1492" /> : "Next"}
        </Button>
      </div>
    </div>
  );
}

export default NextAndBackButtons;
