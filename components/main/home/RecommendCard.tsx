import { Button } from "@/components/ui/Button";
import { Flame, Heart, Play, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function RecommendCard() {
  return (
    <div className="space-y-2">
      <div className="relative rounded-2xl overflow-hidden text-white w-full h-[250px] shadow-lg">
        <Image
          src="/recommend-card.jpg"
          alt="Workout"
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/* Content */}
        <div className="absolute z-20 inset-0 p-4 flex flex-col justify-between gap-2">
          {/* Top Section */}
          <div className="flex justify-end">
            <Button className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center">
              <span className="text-gray-800">
                <Heart size={20} />
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-gray-600 font-medium">Full Body Kpop Challenge</h3>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <TrendingUp />
          <span>Beginners</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Play />
          <span>Class</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Flame />
          <span>Kcal</span>
        </div>
      </div>
    </div>
  );
}
