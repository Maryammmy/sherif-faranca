import { Flame, Play, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Link } from "@/src/i18n/navigation";

function RecommendClassCard() {
  return (
    <div className="space-y-2">
      <div className="h-[250px] shadow-xl rounded-2xl overflow-hidden relative">
        <Image
          src="/workout.jpg"
          alt={"workout"}
          className="object-cover"
          fill
        />
      </div>

      <div>
        <h3 className="text-gray-600 font-medium">day 20</h3>
      </div>
      <div className="grid grid-cols-3 gap-2 capitalize">
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <TrendingUp />
          <span className="truncate">Beginner</span>
        </div>
        <div className="flex items-center justify-center gap-1 text-gray-400 text-sm font-medium">
          <Play />
          <span className="truncate">6Class</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Flame />
          <span className="truncate">100Kcal</span>
        </div>
      </div>
      <Link
        href={`/programs/6`}
        className="flex justify-center items-center gap-2 bg-primary text-white py-3 px-5 rounded-full w-full font-medium"
      >
        <Play />
        <span className="">Start Program </span>
      </Link>
    </div>
  );
}

export default RecommendClassCard;
