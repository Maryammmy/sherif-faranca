import Image from "@/src/components/ui/Image";
import { Link } from "@/src/i18n/navigation";
import { IExerciseDetails } from "@/src/interfaces/program";

interface IProps {
  data: IExerciseDetails;
}
function ExerciseDetails({ data }: IProps) {
  const { imageUrl, focusAreas, musclesImageUrl, title, description } = data;
  return (
    <div className="program-layout">
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <h2 className="text-xl text-gray-700 font-bold leading-none">
            {title}
          </h2>
          <p className="max-w-2xl font-medium text-gray-600 leading-none">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10 lg:gap-20">
          <div className="rounded-2xl overflow-hidden border">
            <Image
              src={imageUrl}
              alt="exercise"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg text-gray-700 font-bold">Instruction</h4>
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
            {focusAreas?.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md px-3 py-2"
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-700 font-semibold text-lg">Muscles Focus</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {musclesImageUrl?.map((img, index) => (
              <div
                key={index}
                className="relative w-50 h-50 rounded-md overflow-hidden"
              >
                <Image src={img} alt="muscle" fill />
                <div className="absolute inset-0 bg-black/10 z-10" />
              </div>
            ))}
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
