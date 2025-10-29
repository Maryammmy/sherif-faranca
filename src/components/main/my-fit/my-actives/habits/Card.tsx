import { IHealthHabit } from "@/src/interfaces/main/my-fit";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import { Droplet, Footprints, Clock12, Flame } from "lucide-react";
import { JSX } from "react";

interface IProps {
  habit: IHealthHabit;
}

function HabitCard({ habit }: IProps) {
  const t = useTranslations("myFit.myActives.healthHabits");
  const { goal, title, progress, unit } = habit;

  const isCalories = title === t("calories");

  // 🧩 خريطة الأيقونات
  const icons: Record<string, JSX.Element> = {
    [t("water")]: <Droplet className="text-blue-400" size={24} />,
    [t("steps")]: <Footprints className="text-green-400" size={24} />,
    [t("duration")]: <Clock12 className="text-gray-400" size={24} />,
    [t("calories")]: <Flame className="text-orange-400" size={24} />,
  };

  const icon = icons[title] ?? null;

  const CardContent = (
    <div className="border rounded-2xl p-4 shadow-sm flex flex-col gap-2 hover:shadow-md transition h-full">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-600 font-medium">{title}</h3>
        {icon && <span>{icon}</span>}
      </div>
      <div className="text-2xl font-bold flex items-baseline gap-1">
        <span>{progress}</span>
        <span className="text-secondary text-base">{unit}</span>
      </div>
      <p className="text-gray-400 text-sm font-medium">
        {t("goal")} {goal} {unit}
      </p>
    </div>
  );

  return isCalories ? (
    <Link href="/calories">{CardContent}</Link>
  ) : (
    <div>{CardContent}</div>
  );
}

export default HabitCard;
