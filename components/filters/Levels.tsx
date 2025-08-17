import { ISupFilter } from "@/interfaces/filters";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

interface IProps {
  levels: ISupFilter[];
  value: number | null;
  onChange: (id: number) => void;
}

function Levels({ levels, value, onChange }: IProps) {
  return (
    <div>
      <h2 className="text-gray-700 font-bold">Levels</h2>
      <div className="py-5 flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
        {levels?.map(({ id, name }) => {
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
        })}
      </div>
    </div>
  );
}

export default Levels;
