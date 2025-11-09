import Image from "@/src/components/ui/Image";
import { cn } from "@/src/lib/utils";
import { workoutFrequencies } from "@/src/data/questions";
import { Button } from "@/src/components/ui/Button";
import { useTranslations } from "next-intl";

interface IProps {
  selectedWorkoutTime: number;
  handleClickWorkoutTime: (val: number) => void;
}
const SelectWorkoutFrequency = ({
  selectedWorkoutTime,
  handleClickWorkoutTime,
}: IProps) => {
  const t = useTranslations("workoutFrequency");
  const selectedItem = workoutFrequencies.find(
    (item) => item.value === selectedWorkoutTime
  );

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 pt-5">
      {/* Calendar Image */}
      <div className="relative w-40 h-40">
        <Image
          key={selectedItem?.label}
          src={`/${selectedItem?.src}.png`}
          alt="Calendar"
          fill
        />
      </div>
      <div className="space-y-2 text-center">
        {/* Time Text */}
        <header>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-700">
            {t("workoutPerWeek", { count: selectedWorkoutTime })}
          </h1>
        </header>
        {/* Description */}
        {selectedItem?.label && (
          <div className="max-w-3xs mx-auto">
            <p className="text-secondary text-sm sm:text-base">
              {t(selectedItem?.label)}
            </p>
          </div>
        )}
      </div>
      {/* Dot Selector */}
      <div className="bg-primary/30 w-full sm:w-96 mx-auto p-2 rounded-full flex items-center justify-between gap-4">
        {workoutFrequencies.map(({ value }) => (
          <Button
            key={value}
            onClick={() => handleClickWorkoutTime(value)}
            className={cn(
              "bg-white w-5 h-5 rounded-full transition-all duration-300 ease-in-out",
              selectedWorkoutTime === value &&
                "bg-primary border-2 border-white w-6 h-6"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectWorkoutFrequency;
