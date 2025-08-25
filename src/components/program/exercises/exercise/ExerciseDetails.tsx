import Image from "next/image";
import Link from "next/link";

function ExerciseDetails() {
  return (
    <div className="program-layout">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10 lg:gap-20">
          <div className="rounded-2xl overflow-hidden border">
            <Image
              src="/exercise-static.png"
              alt="exercise"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div>
            <header>
              <h1 className="text-lg text-gray-700 font-bold">Instruction</h1>
            </header>
            <div className="max-w-2xl">
              <p className="text-secondary font-medium">
                Start with your feet together and your arms by your sides, then
                jump up with your feet apart and your hands overhead.Return to
                the start position then do the next rep. This exercise provides
                a full-body workout and works all your large muscle groups.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-700 font-semibold text-lg">Focus Area</h2>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Back Area</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Quadriceps Area</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Cheat Area</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Shoulder Area</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Glutes Area</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Calves Area</span>
            </div>
            <div className="border border-gray-200 rounded-md px-3 py-2">
              <span>Adductors Area</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-700 font-semibold text-lg">Muscles Focus</h2>
          <div className="flex justify-center items-center">
            <Image
              src="/muscles.png"
              alt="exercise"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <Link
            href="/"
            className="flex justify-center items-center bg-primary hover:bg-primary/80 font-medium text-white py-3 w-full sm:w-60 rounded-md"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetails;
