"use client";
import Button from "@/components/ui/Button";
import { Calendar1, Clock4, Dumbbell, House, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
interface IProps {
  programId: string;
}
function Content({ programId }: IProps) {
  const router = useRouter();
  return (
    <div className="program-layout">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-secondary font-medium">
            Lose belly fat, get ripped in just 4 weeks with this efficient plan.
            It also helps pump up your arms, strengthen your back & shoulders.
            No equipment needed!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-700 font-semibold text-lg">
            About The Program
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-4 font-medium">
            <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2">
              <span className="text-primary shrink-0">
                <House size={20} />
              </span>
              <span className="text-secondary">Home</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2">
              <span className="text-primary shrink-0">
                <Dumbbell size={20} />
              </span>
              <span className="text-secondary">Equipment Option</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2">
              <span className="text-primary shrink-0">
                <Clock4 size={20} />
              </span>
              <span className="text-secondary">9-30 min / day</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2">
              <span className="text-primary shrink-0">
                <Calendar1 size={20} />
              </span>
              <span className="text-secondary">28 Day</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-700 font-semibold text-lg">
            What This Program Offer
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Fat Burning</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Stay Home Stay In Shape</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Lose Weight</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Keep Fit Work Out</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Flexibility Work Out</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Dance Work</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Mix Work Out</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Zumba Work Out</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Build Musicale</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>For Beginner</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Stretch Work out</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-700 font-semibold text-lg">
            Expected Results
          </h2>
          <div className="flex items-center gap-2 font-medium">
            <span className="text-primary shrink-0">
              <ShieldCheck />
            </span>
            <p className="text-secondary">
              Build a Massive Upper Body and a Strong Core
            </p>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <span className="text-primary shrink-0">
              <ShieldCheck />
            </span>
            <p className="text-secondary">
              Develop Solid Muscles and Get Shredded
            </p>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <span className="text-primary shrink-0">
              <ShieldCheck />
            </span>
            <p className="text-secondary">
              Increase Stamina & Become Energetic
            </p>
          </div>
        </div>
        <div>
          <Button
            onClick={() => router.push(`/programs/${programId}/select-day`)}
            className="bg-primary hover:bg-primary/80 font-medium text-white py-3 w-full sm:w-60 rounded-md"
          >
            Start Program
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Content;
