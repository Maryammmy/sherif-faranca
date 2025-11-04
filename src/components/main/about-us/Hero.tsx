import Image from "@/src/components/ui/Image";
import { useTranslations } from "next-intl";

interface IProps {
  imageUrl: string;
}
export default function Hero({ imageUrl }: IProps) {
  const t = useTranslations("aboutUs");
  return (
    <div className="relative h-[260px] md:h-[400px] w-full overflow-hidden rounded-3xl">
      <Image src={imageUrl} alt={t("sherifFarancaPlatform")} fill priority />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <header>
          <h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold text-white leading-snug">
            {t("title")}
            <br />
            {t("sherifFarancaPlatform")}
          </h1>
        </header>
        <p className="mt-3 max-w-2xl text-gray-200 text-sm md:text-base">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
