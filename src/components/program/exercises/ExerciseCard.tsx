import { Clock12, Flame, CircleCheck } from "lucide-react";
import Image from "next/image";
import { Link } from "@/src/i18n/navigation";
interface IProps {
  exerciseId: number;
  programId: string;
}
function ExerciseCard({ exerciseId, programId }: IProps) {
  return (
    <Link
      href={`/programs/${programId}/exercises/${exerciseId}`}
      className="p-3 bg-gray-100 border rounded-2xl flex flex-col gap-2"
    >
      <div className="relative overflow-hidden rounded-2xl w-[250px] h-[250px] md:w-[280px] md:h-[280px]">
        <Image
          src="/exercise.gif"
          alt="description"
          fill
          className="object-cover"
          unoptimized
          sizes="(min-width: 768px) 280px, 250px"
          priority
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-gray-700">Jumping Jacks</h2>
        <div className="flex gap-1 items-center text-gray-700 text-xs font-medium">
          <div className="flex items-center gap-px">
            <Flame className="text-orange-600 w-5 h-5" />
            <span>170 Kcal</span>
          </div>
          <div className="flex items-center gap-px">
            <Clock12 className="w-5 h-5" />
            <span>20 Min</span>
          </div>
          <div className="flex items-center gap-px">
            <CircleCheck className="w-5 h-5" />
            <span>Chest area</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ExerciseCard;
