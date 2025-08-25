import { IClass } from "@/src/interfaces/main/home";
import { Clock12, Flame, TrendingUp } from "lucide-react";
import Image from "next/image";

interface IProps {
  classicClass: IClass;
}
export default function ClassicClassCard({ classicClass }: IProps) {
  const { title, level, totalCalories, totalDuration, imageUrl } = classicClass;
  return (
    <div className="space-y-2">
      <div className="h-[250px] shadow-xl rounded-2xl overflow-hidden relative">
        <Image src={imageUrl} alt={title} className="object-cover" fill />
      </div>

      <div>
        <h3 className="text-gray-600 font-medium">{title}</h3>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <TrendingUp />
          <span className="truncate">{level}</span>
        </div>
        <div className="flex justify-center items-center gap-1 text-gray-400 text-sm font-medium">
          <Clock12 />
          <span>{totalDuration}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Flame />
          <span className="truncate">{totalCalories}Kcal</span>
        </div>
      </div>
    </div>
  );
}
