import { Flame, Play, TrendingUp } from "lucide-react";
import Image from "@/src/components/ui/Image";
import { Link } from "@/src/i18n/navigation";
import { ISuggestedProgram } from "@/src/interfaces/main/discover";

interface IProps {
  program: ISuggestedProgram;
}
function SuggestedProgramCard({ program }: IProps) {
  const { id, classesCount, imageUrl, levelName, title, totalCalories } =
    program;
  return (
    <div className="space-y-2">
      <div className="h-[250px] shadow-xl rounded-2xl overflow-hidden relative">
        <Image src={imageUrl} alt={title} className="object-cover" fill />
      </div>

      <div>
        <h3 className="text-gray-600 font-medium capitalize truncate">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-2 capitalize">
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <TrendingUp />
          <span className="truncate">{levelName}</span>
        </div>
        <div className="flex items-center justify-center gap-1 text-gray-400 text-sm font-medium">
          <Play />
          <span className="truncate">{classesCount}Class</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Flame />
          <span className="truncate">{totalCalories}Kcal</span>
        </div>
      </div>
      <Link
        href={`/programs/${id}`}
        className="flex justify-center items-center gap-2 bg-primary text-white py-3 px-5 rounded-full w-full font-medium"
      >
        <Play />
        <span className="">Start Program </span>
      </Link>
    </div>
  );
}

export default SuggestedProgramCard;
