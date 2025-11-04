import Image from "@/src/components/ui/Image";
import { useTranslations } from "next-intl";

interface IProps {
  imageUrl: string;
}
function Hero({ imageUrl }: IProps) {
  const t = useTranslations("privacyPolicy");
  return (
    <div className="relative h-[220px] md:h-[320px] w-full overflow-hidden rounded-3xl">
      <Image src={imageUrl} alt={t("title")} fill priority />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <header>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">
            {t("title")}
          </h1>
        </header>
      </div>
    </div>
  );
}
export default Hero;
