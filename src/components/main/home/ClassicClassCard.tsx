import { IClass } from "@/src/interfaces/main/home";
import { Clock12, Flame, TrendingUp } from "lucide-react";
import Image from "@/src/components/ui/Image";
import Link from "next/link";
import { getHref } from "@/src/lib/utils";

interface IProps {
  classicClass: IClass;
}
export default function ClassicClassCard({ classicClass }: IProps) {
  const { title, level, calories, duration, imageUrl, videoId } = classicClass;
  return (
    <Link href={getHref(videoId)} className="space-y-2">
      <div className="h-[250px] shadow-xl rounded-2xl overflow-hidden relative">
        <Image src={imageUrl} alt={title} className="object-cover" fill />
      </div>

      <div>
        <h3 className="text-gray-600 font-medium">{title}</h3>
      </div>
      <div className="grid grid-cols-3 gap-2 capitalize">
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <TrendingUp />
          <span className="truncate">{level}</span>
        </div>
        <div className="flex justify-center items-center gap-1 text-gray-400 text-sm font-medium">
          <Clock12 />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Flame />
          <span className="truncate">{calories}Kcal</span>
        </div>
      </div>
    </Link>
  );
}
