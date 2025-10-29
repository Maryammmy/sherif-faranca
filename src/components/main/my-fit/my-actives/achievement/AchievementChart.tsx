import CircularRing from "@/src/components/ui/CircularRing";
import { rings } from "@/src/data/main/my-fit";
import { useTranslations } from "next-intl";

interface IProps {
  progress: number;
}
export default function AchievementChart({ progress }: IProps) {
  const t = useTranslations("myFit.myActives.achievement");
  return (
    <div className="relative w-40 h-40 mx-auto">
      {rings.map(({ scale, ...ringProps }, index) => (
        <div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <CircularRing {...ringProps} />
        </div>
      ))}

      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold">{progress}%</span>
        <span className="text-sm text-secondary font-medium">{t("goal")}</span>
      </div>
    </div>
  );
}
