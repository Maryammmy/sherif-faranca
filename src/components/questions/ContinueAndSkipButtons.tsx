"use client";
import { sendPreference } from "@/src/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/Button";
import Loader from "../loader/Loader";
import { useRouter } from "next/navigation";

interface IProps {
  continueHref: string;
}
function ContinueAndSkipButtons({ continueHref }: IProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    await sendPreference(router);
    setLoading(false);
  };

  return (
    <div>
      <div className="border-2 w-full"></div>
      <div className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-center p-5">
        <Button
          disabled={loading}
          onClick={handleClick}
          className="text-center border border-primary text-primary font-medium py-2.5 w-full sm:w-40 rounded"
        >
          {loading ? <Loader borderColor="#3e1492" /> : "Skip"}
        </Button>
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
