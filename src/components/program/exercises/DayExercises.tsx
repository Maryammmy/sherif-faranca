"use client";
import { ChevronRight } from "lucide-react";
import ExerciseCard from "./ExerciseCard";
import { Link } from "@/src/i18n/navigation";
import { IProgramDay } from "@/src/interfaces/program";
import RecommendForYou from "./RecommendForYou";
interface IProps {
  programId: string;
  dayId: string;
  data: IProgramDay;
}
function DayExercises({ programId, dayId, data }: IProps) {
  const {
    dayDescription,
    dayTitle,
    programTitle,
    level,
    totalTimeMinutes,
    focusArea,
    exercises,
    suggestions,
  } = data;
  return (
    <div className="program-layout">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <header>
            {" "}
            <h1 className="text-gray-700 font-bold">{programTitle}</h1>
          </header>
          <header>
            {" "}
            <h1 className="text-xl text-gray-700 font-bold">{dayTitle}</h1>
          </header>
          <p className="text-secondary font-medium">{dayDescription}</p>
        </div>
        <div className="flex items-center justify-between bg-white rounded-xl shadow-sm px-3 sm:px-6 py-4 border text-center text-gray-700 font-medium w-full max-w-md mx-auto">
          {/* Level */}
          <div className="flex-1">
            <div className="flex flex-col gap-px items-start mx-auto w-fit">
              <h3 className="flex justify-center items-center gap-px text-xs sm:text-base">
                {level}{" "}
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
              <h3 className="text-xs sm:text-base">{totalTimeMinutes} Mins</h3>
              <p className=" text-xs text-gray-400">Time</p>
            </div>
          </div>
          {/* Divider */}
          <div className="w-px h-8 bg-gray-200 mx-2 sm:mx-4" />
          {/* Focus Area */}
          <div className="flex-1">
            <div className="flex flex-col gap-px items-start mx-auto w-fit">
              <h3 className="text-xs sm:text-base">{focusArea}</h3>
              <p className="text-xs text-gray-400">Focus Area</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-lg text-gray-700 font-bold">
              Exercises ({exercises?.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {exercises?.map((exercise) => (
              <ExerciseCard
                key={exercise?.exerciseId}
                programId={programId}
                dayId={dayId}
                exercise={exercise}
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
        <RecommendForYou suggestions={suggestions} />
      </div>
    </div>
  );
}

export default DayExercises;
