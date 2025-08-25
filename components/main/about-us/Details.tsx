import { IAboutUs } from "@/interfaces/main/services";
import Image from "next/image";

interface IProps {
  data: IAboutUs;
}
export default function Details({ data }: IProps) {
  const { description, imageUrl, title, version } = data;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <div className="order-2 lg:order-1 p-6">
        <h2 className="text-lg md:text-xl font-extrabold text-[#3e1492]">
          About <span className="text-gray-900">{title}</span>
        </h2>
        <div className="mt-3 space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
          <p>{description}</p>
          <p className="text-sm text-secondary font-medium">
            Version: {version}
          </p>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src={imageUrl}
            alt="Workout at Sherif Franca"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
