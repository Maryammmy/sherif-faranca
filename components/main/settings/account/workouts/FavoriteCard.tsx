import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";

interface IProps {
  FavoriteWorkoutsClassname?: string;
}
function FavoriteWorkoutsCard({ FavoriteWorkoutsClassname }: IProps) {
  return (
    <div className="p-4 rounded-2xl border space-y-2 bg-gray-50">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl w-[250px] h-[250px] md:w-[280px] md:h-[280px]",
          FavoriteWorkoutsClassname && FavoriteWorkoutsClassname
        )}
      >
        <Image
          src="/exercise.gif"
          alt="Workout"
          fill
          className="object-cover"
          unoptimized
          sizes="(min-width: 768px) 280px, 250px"
          priority
        />
        <div className="absolute z-20 inset-0 p-4 flex flex-col justify-between gap-2">
          <div className="flex justify-end">
            <Button className="w-8 h-8 rounded-full bg-gray-100/70 flex items-center justify-center">
              <Heart size={20} className="text-[#F95555] fill-[#F95555]" />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-gray-700">Jumping Jacks</h2>
      </div>
    </div>
  );
}

export default FavoriteWorkoutsCard;
