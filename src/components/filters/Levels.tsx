import { ISubFilter } from "@/src/interfaces/filters";
import { Button } from "../ui/Button";
import { cn } from "@/src/lib/utils";
import { EmptyState } from "../ui/empty-state/EmptyState";
import { useTranslations } from "next-intl";

interface IProps {
  levels: ISubFilter[];
  value: number | null;
  onChange: (id: number) => void;
}

function Levels({ levels, value, onChange }: IProps) {
  const t = useTranslations("fliters.levels");
  return (
    <div>
      <h2 className="text-gray-700 font-bold">{t("title")}</h2>
      <div className="py-5 flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
        {levels?.length ? (
          levels?.map(({ id, name }) => {
            const isActive = value === id;

            return (
              <Button
                key={id}
                onClick={() => onChange(id)}
                className={cn(
                  "flex items-center gap-2 border rounded-md px-3 py-2 transition",
                  isActive
                    ? "border-primary text-primary font-semibold"
                    : "border-gray-200 text-secondary"
                )}
              >
                <span>{name}</span>
              </Button>
            );
          })
        ) : (
          <EmptyState message={t("noLevelsFound")} />
        )}
      </div>
    </div>
  );
}

export default Levels;
