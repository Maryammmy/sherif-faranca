import { Clock12, Flame, TrendingUp } from "lucide-react";
import Image from "@/src/components/ui/Image";
import React from "react";

function FatBurningCard() {
  return (
    <div className="space-y-2">
      <div className="h-[250px] shadow-xl rounded-2xl overflow-hidden relative">
        <Image src="/workout.jpg" alt="workout" className="object-cover" fill />
      </div>

      <div>
        <h3 className="text-gray-600 font-medium capitalize">Abs Work Out</h3>
      </div>
      <div className="grid grid-cols-3 gap-2 capitalize">
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <TrendingUp />
          <span className="truncate">beginners</span>
        </div>
        <div className="flex justify-center items-center gap-1 text-gray-400 text-sm font-medium">
          <Clock12 />
          <span>20 min</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Flame />
          <span className="truncate">100Kcal</span>
        </div>
      </div>
    </div>
  );
}

export default FatBurningCard;
