import { Button } from "@/src/components/ui/Button";
import { Clock12, Heart, MoveLeft, Play, TrendingUp } from "lucide-react";
import Image from "@/src/components/ui/Image";
import { Link } from "@/src/i18n/navigation";
import { IProgramBackground } from "@/src/interfaces/program";
import { toggleFavAPI } from "@/src/services/mutations/fav";
import { useQueryClient } from "@tanstack/react-query";
interface IProps {
  href: string;
  programBackground: IProgramBackground;
  queryKey: string[];
}
function Background({ href, programBackground, queryKey }: IProps) {
  const queryClient = useQueryClient();
  const { imageUrl, isFavorite, category, level, timeTotal, title, id } =
    programBackground;
  const toggleProgramFav = async () => {
    const payload = {
      itemId: id,
      isProgram: true,
    };
    const response = await toggleFavAPI(payload);
    if (response?.success === true) {
      queryClient.refetchQueries({
        queryKey,
      });
    }
  };

  return (
    <div>
      <div className="w-full relative h-[250px] sm:h-[300px] lg:h-[320px]">
        <div className="absolute inset-0 bg-black/50 z-[5] pointer-events-none" />
        <div className="w-full h-full absolute z-10">
          <div className="flex flex-col justify-between gap-5 p-5 pb-10 sm:p-10 sm:pb-20 h-full">
            <div className="flex justify-between items-center">
              <Link
                href={href}
                className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white"
              >
                <MoveLeft className="text-gray-700 w-4 h-4 sm:w-6 sm:h-6" />
              </Link>
              <Button
                onClick={toggleProgramFav}
                className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white"
              >
                {isFavorite ? (
                  <Heart className="text-[#F95555] fill-[#F95555] w-4 h-4 sm:w-6 sm:h-6" />
                ) : (
                  <Heart className="text-gray-700 w-4 h-4 sm:w-6 sm:h-6" />
                )}
              </Button>
            </div>
            <div className="space-y-3">
              {title && (
                <header>
                  <h1 className="max-w-xs text-2xl sm:text-4xl font-semibold text-white">
                    {programBackground?.title}
                  </h1>
                </header>
              )}
              {level && category && timeTotal && (
                <div className="flex gap-2 xs:gap-4 items-center text-gray-300 text-sm font-medium">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="shrink-0" />
                    <span>{level}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="shrink-0" />
                    <span>{category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock12 className="shrink-0" />
                    <span>{timeTotal}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Image src={imageUrl} alt="Program background" fill priority />
      </div>
    </div>
  );
}

export default Background;
