import { IFiltersResult } from "@/src/interfaces/filters";
import { TrendingUp, Clock12, Flame } from "lucide-react";
import Image from "next/image";
import React from "react";

interface IProps {
  result: IFiltersResult;
}
function FiltersResultCard({ result }: IProps) {
  const { title, imageUrl, level, calories, durationMinutes } = result;
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
          <span>{durationMinutes}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Flame />
          <span className="truncate">{calories}Kcal</span>
        </div>
      </div>
    </div>
  );
}

export default FiltersResultCard;
