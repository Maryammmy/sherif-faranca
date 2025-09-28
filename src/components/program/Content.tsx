"use client";
import { Button } from "@/src/components/ui/Button";
import { Calendar1, Clock4, Dumbbell, House, ShieldCheck } from "lucide-react";
import { useRouter } from "@/src/i18n/navigation";
import { IProgram } from "@/src/interfaces/program";
interface IProps {
  programId: string;
  data: IProgram;
}
function Content({ programId, data }: IProps) {
  const router = useRouter();
  const {
    description,
    equipments,
    time,
    activeDays,
    atGym,
    whatThisProgramOffer,
    expectedResults,
  } = data;
  return (
    <div className="program-layout">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-secondary font-medium">{description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-700 font-semibold text-lg">
            About The Program
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-4 font-medium">
            <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2">
              <span className="text-primary shrink-0">
                {atGym ? <Dumbbell size={20} /> : <House size={20} />}
              </span>
              <span className="text-secondary">{atGym ? "Gym" : "Home"}</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2">
              <span className="text-primary shrink-0">
                <Dumbbell size={20} />
              </span>
              <span className="text-secondary">{equipments}</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2">
              <span className="text-primary shrink-0">
                <Clock4 size={20} />
              </span>
              <span className="text-secondary">{time}</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2">
              <span className="text-primary shrink-0">
                <Calendar1 size={20} />
              </span>
              <span className="text-secondary">{activeDays} Day</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-700 font-semibold text-lg">
            What This Program Offer
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
            {whatThisProgramOffer?.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md px-3 py-2"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-700 font-semibold text-lg">
            Expected Results
          </h2>
          {expectedResults?.map((item, index) => (
            <div key={index} className="flex items-center gap-2 font-medium">
              <span className="text-primary shrink-0">
                <ShieldCheck />
              </span>
              <p className="text-secondary">{item}</p>
            </div>
          ))}
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
