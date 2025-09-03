import { SkeletonCard } from "@/src/components/skeleton/Card";
import { useEmail } from "@/src/hooks";
import { MailPlus } from "lucide-react";

function Content() {
  const { data } = useEmail();
  return (
    <div className="flex flex-col items-center gap-1 border-b pb-5">
      {!data ? (
        <SkeletonCard count={1} className="h-8 w-60" />
      ) : (
        <>
          <div className="w-14 h-14 rounded-full flex justify-center items-center bg-primary">
            <MailPlus className="text-white" />
          </div>
          <span className="text-secondary font-medium">Current email</span>
          <div>
            <p className="text-gray-600 font-medium leading-none">
              {data?.message}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Content;
