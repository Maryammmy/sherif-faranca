import { Button } from "@/src/components/ui/Button";
import { IRecommendedForYou } from "@/src/interfaces/main/home";
import { toggleFavAPI } from "@/src/services/mutations/fav";
import { useQueryClient } from "@tanstack/react-query";
import { Flame, Heart, Play, TrendingUp } from "lucide-react";
import Image from "@/src/components/ui/Image";

interface IProps {
  recommendForYou: IRecommendedForYou;
}
export default function RecommendForYouCard({ recommendForYou }: IProps) {
  const queryClient = useQueryClient();
  const {
    classesCount,
    levelName,
    title,
    totalCalories,
    imageUrl,
    id,
    isProgram,
    isFavorite,
  } = recommendForYou;
  const toggleFav = async () => {
    const payload = {
      itemId: id,
      isProgram,
    };
    const response = await toggleFavAPI(payload);
    if (response?.success === true) {
      queryClient.invalidateQueries({ queryKey: ["recommendForYou"] });
    }
  };
  return (
    <div className="space-y-2">
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
        <div className="absolute z-20 inset-0 p-4 flex flex-col justify-between gap-2">
          {/* Top Section */}
          <div className="flex justify-end">
            <Button
              onClick={toggleFav}
              className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center"
            >
              <span>
                {isFavorite ? (
                  <Heart size={20} className="text-[#F95555] fill-[#F95555]" />
                ) : (
                  <Heart size={20} className="text-gray-800" />
                )}
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-gray-600 font-medium">{title}</h3>
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
          <Flame className="shrink-0" />
          <span className="truncate">{totalCalories}Kcal</span>
        </div>
      </div>
    </div>
  );
}
