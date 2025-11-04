import { Button } from "@/src/components/ui/Button";
import { IFav } from "@/src/interfaces/fav";
import { useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import Image from "@/src/components/ui/Image";
import { toggleFavAPI } from "@/src/services/mutations/fav";
import { Link } from "@/src/i18n/navigation";
import { getHref } from "@/src/lib/utils";

interface IProps {
  fav: IFav;
}
function FavoriteTrainingCard({ fav }: IProps) {
  const { imageUrl, title, id, isProgram } = fav;
  const queryClient = useQueryClient();
  const toggleMyFitFav = async () => {
    const payload = {
      itemId: id,
      isProgram: isProgram,
    };
    const response = await toggleFavAPI(payload);
    if (response?.success === true) {
      queryClient.invalidateQueries({ queryKey: ["myFitFav"] });
    }
  };
  return (
    <Link
      href={getHref(id, isProgram)}
      className="p-4 rounded-2xl border space-y-2 bg-gray-50"
    >
      <div className="relative overflow-hidden rounded-2xl h-[250px] w-full">
        <Image
          src={imageUrl}
          alt="My favorite training"
          fill
          className="object-cover"
          unoptimized
          sizes="(min-width: 768px) 280px, 250px"
          priority
        />
        <div className="absolute z-20 inset-0 p-4 flex flex-col justify-between gap-2">
          <div className="flex justify-end">
            <Button
              onClick={toggleMyFitFav}
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
    </Link>
  );
}

export default FavoriteTrainingCard;
