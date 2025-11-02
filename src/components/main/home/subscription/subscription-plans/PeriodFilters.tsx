import { Button } from "@/src/components/ui/Button";
import { periods } from "@/src/data";
import { cn } from "@/src/lib/utils";
import { useTranslations } from "next-intl";

interface IProps {
  selectedPeriod: string;
  handleSelectPeriod: (period: string) => void;
}
function PeriodFilters({ selectedPeriod, handleSelectPeriod }: IProps) {
  const t = useTranslations("subscription.periods");
  return (
    <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-5">
      {periods.map((period, index) => (
        <Button
          key={index}
          onClick={() => handleSelectPeriod(period)}
          className={cn(
            "font-medium py-1.5 px-6 rounded-sm capitalize",
            selectedPeriod === period
              ? "bg-primary text-white"
              : "border border-primary bg-white text-primary"
          )}
        >
          {t(period)}
        </Button>
      ))}
    </div>
  );
}

export default PeriodFilters;
