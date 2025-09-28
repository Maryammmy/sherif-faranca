import { Clock12, Flame, CircleCheck } from "lucide-react";
import Image from "@/src/components/ui/Image";
import { Link } from "@/src/i18n/navigation";
import { IExercise } from "@/src/interfaces/program";
interface IProps {
  programId: string;
  dayId: string;
  exercise: IExercise;
}
function ExerciseCard({ programId, dayId, exercise }: IProps) {
  const { calories, durationMinutes, exerciseId, focusArea, imageUrl, title } =
    exercise;
  return (
    <Link
      href={`/programs/${programId}/days/${dayId}/exercises/${exerciseId}`}
      className="p-3 bg-gray-100 border rounded-2xl flex flex-col gap-2"
    >
      <div className="relative overflow-hidden rounded-2xl w-full h-[250px]">
        <Image
          src={imageUrl}
          alt="exercise"
          fill
          className="object-cover"
          unoptimized
          sizes="(min-width: 768px) 280px, 250px"
          priority
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-gray-700">{title}</h2>
        <div className="flex gap-1 items-center text-gray-700 text-xs font-medium">
          <div className="flex items-center gap-px">
            <Flame className="text-orange-600 w-5 h-5" />
            <span>{calories} Kcal</span>
          </div>
          <div className="flex items-center gap-px">
            <Clock12 className="w-5 h-5" />
            <span>{durationMinutes} Min</span>
          </div>
          <div className="flex items-center gap-px">
            <CircleCheck className="w-5 h-5" />
            <span>{focusArea}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ExerciseCard;
