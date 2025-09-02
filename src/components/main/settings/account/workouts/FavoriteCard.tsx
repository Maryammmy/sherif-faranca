import { Button } from "@/src/components/ui/Button";
import { IFav } from "@/src/interfaces/fav";
import { toggleWorkoutsFavAPI } from "@/src/services/mutations/workouts-program";
import { useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

interface IProps {
  fav: IFav;
}
function FavoriteWorkoutCard({ fav }: IProps) {
  const queryClient = useQueryClient();
  const { imageUrl, title, id, isProgram } = fav;
  const toggleWorkoutsFav = async () => {
    const payload = {
      itemId: id,
      isProgram: isProgram,
    };
    const response = await toggleWorkoutsFavAPI(payload);
    if (response?.success === true) {
      queryClient.refetchQueries({
        queryKey: ["favWorkouts"],
      });
      toast.success(response?.message);
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <div className="p-4 rounded-2xl border space-y-2 bg-gray-50">
      <div className="relative overflow-hidden rounded-2xl w-full h-[250px]">
        <Image
          src={imageUrl}
          alt="Workout"
          fill
          className="object-cover"
          unoptimized
          sizes="(min-width: 768px) 280px, 250px"
          priority
        />
        <div className="absolute z-20 inset-0 p-4 flex flex-col justify-between gap-2">
          <div className="flex justify-end">
            <Button
              onClick={toggleWorkoutsFav}
              className="w-8 h-8 rounded-full bg-gray-100/70 flex items-center justify-center"
            >
              <Heart size={20} className="text-[#F95555] fill-[#F95555]" />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-gray-700">{title}</h2>
      </div>
    </div>
  );
}

export default FavoriteWorkoutCard;
