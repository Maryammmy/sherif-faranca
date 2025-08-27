import { IFoucsArea } from "@/src/interfaces/main/discover";
import Image from "next/image";

interface IProps {
  area: IFoucsArea;
}
function Area({ area }: IProps) {
  const { imageUrl, title } = area;
  return (
    <div className="flex flex-col gap-2 items-center focus:outline-none">
      <div className="relative h-20 w-20 rounded-full overflow-hidden transition">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/5 z-10" />
      </div>
      <h4 className="font-medium text-sm sm:text-base text-secondary capitalize">
        {title}
      </h4>
    </div>
  );
}

export default Area;
