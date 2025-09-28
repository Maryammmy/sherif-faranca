import { Clock12, Flame, TrendingUp } from "lucide-react";
import Image from "@/src/components/ui/Image";
import Link from "next/link";
import { ISuggestion } from "@/src/interfaces/program";

interface IProps {
  suggestion: ISuggestion;
}
export default function RecommendCard({ suggestion }: IProps) {
  const { calories, imageUrl, level, programId, timeMinutes, title } =
    suggestion;
  return (
    <Link href={`/programs/${programId}`} className="space-y-2">
      <div className="relative rounded-2xl overflow-hidden text-white w-full h-[250px] shadow-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/* Content */}
      </div>
      <div>
        <h3 className="text-gray-600 font-medium">{title}</h3>
      </div>
      <div className="grid grid-cols-3 gap-2 capitalize">
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <TrendingUp />
          <span className="truncate">{level}</span>
        </div>
        <div className="flex items-center justify-center gap-1 text-gray-400 text-sm font-medium">
          <Clock12 />
          <span className="truncate">{timeMinutes}Mins</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Flame className="shrink-0" />
          <span className="truncate">{calories}Kcal</span>
        </div>
      </div>
    </Link>
  );
}
