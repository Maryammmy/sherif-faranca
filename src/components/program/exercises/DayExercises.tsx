"use client";
import { ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ExerciseCard from "./ExerciseCard";
import RecommendForYou from "@/src/components/main/home/RecommendForYou";
import { Link } from "@/src/i18n/navigation";
interface IProps {
  programId: string;
}
function DayExercises({ programId }: IProps) {
  const searchParams = useSearchParams();
  const day = searchParams.get("day");

  return (
    <div className="program-layout">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <header>
            <h1 className="text-gray-700 font-bold">
              Massive Upper Body Plane
            </h1>
          </header>
          <h2 className="text-xl text-gray-700 font-bold">DAY {day}</h2>
          <p className="text-secondary font-medium">
            Lose belly fat, get ripped in just 4 weeks with this efficient plan.
            It also helps pump up your arms, strengthen your back & shoulders.
            No equipment needed!
          </p>
        </div>
        <div className="flex items-center justify-between bg-white rounded-xl shadow-sm px-3 sm:px-6 py-4 border text-center text-gray-700 font-medium w-full max-w-md mx-auto">
          {/* Level */}
          <div className="flex-1">
            <div className="flex flex-col gap-px items-start mx-auto w-fit">
              <h3 className="flex justify-center items-center gap-px text-xs sm:text-base">
                Adjustable{" "}
                <span className="text-primary shrink-0">
                  <ChevronRight />
                </span>
              </h3>
              <p className="text-xs text-gray-400">Level</p>
            </div>
          </div>
          {/* Divider */}
          <div className="w-px h-8 bg-gray-200 mx-2 sm:mx-4" />
          {/* Time */}
          <div className="flex-1">
            <div className="flex flex-col gap-px items-start mx-auto w-fit">
              <h3 className="text-xs sm:text-base">30 Mins</h3>
              <p className=" text-xs text-gray-400">Time</p>
            </div>
          </div>
          {/* Divider */}
          <div className="w-px h-8 bg-gray-200 mx-2 sm:mx-4" />
          {/* Focus Area */}
          <div className="flex-1">
            <div className="flex flex-col gap-px items-start mx-auto w-fit">
              <h3 className="text-xs sm:text-base">Chest</h3>
              <p className="text-xs text-gray-400">Focus Area</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-lg text-gray-700 font-bold">Exercises (11)</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 place-items-center gap-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <ExerciseCard
                key={index}
                exerciseId={index + 1}
                programId={programId}
              />
            ))}
          </div>
          <Link
            href={`/programs/${programId}/video-player`}
            className="bg-primary hover:bg-primary/80 text-center font-medium text-white py-3 w-full sm:w-60 rounded-md"
          >
            Start Training
          </Link>
        </div>
        <RecommendForYou screen3xl={true} />
      </div>
    </div>
  );
}

export default DayExercises;
