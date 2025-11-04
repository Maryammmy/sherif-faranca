import { Clock12, Flame, CircleCheck } from "lucide-react";
import Image from "@/src/components/ui/Image";
import { Link } from "@/src/i18n/navigation";
import { IExercise } from "@/src/interfaces/program";
import { useTranslations } from "next-intl";
interface IProps {
  exercise: IExercise;
}
function ExerciseCard({ exercise }: IProps) {
  const t = useTranslations("card");
  const { calories, durationMinutes, exerciseId, focusArea, imageUrl, title } =
    exercise;
  return (
    <Link
      href={`/videos/${exerciseId}`}
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
        <h2 className="font-bold text-gray-700 truncate">{title}</h2>
        <div className="grid grid-cols-3 gap-2 capitalize text-gray-700 text-xs font-medium">
          <div className="flex items-center gap-px">
            <Flame className="text-orange-600 size-5 shrink-0" />
            <span className="truncate">
              {calories}
              {t("kcal")}
            </span>
          </div>
          <div className="flex items-center gap-px">
            <Clock12 className="size-5 shrink-0" />
            <span className="truncate">
              {durationMinutes}
              {t("mins")}
            </span>
          </div>
          <div className="flex items-center gap-px">
            <CircleCheck className="size-5 shrink-0" />
            <span className="truncate">{focusArea}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ExerciseCard;
