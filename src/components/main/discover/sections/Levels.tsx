import { Button } from "@/src/components/ui/Button";
import { ILevel } from "@/src/interfaces/main/discover";

interface IProps {
  levels: ILevel[];
  selectedLevelId: number | null;
  onSelectLevel: (id: number) => void;
}

function Levels({ levels, selectedLevelId, onSelectLevel }: IProps) {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
      {levels?.map(({ id, name }) => {
        const isSelected = selectedLevelId === id;

        return (
          <Button
            key={id}
            onClick={() => onSelectLevel(id)}
            className={`flex items-center capitalize gap-2 rounded-md px-3 py-2 transition
              ${
                isSelected
                  ? "bg-primary text-white border-primary"
                  : "border border-gray-200 hover:border-primary hover:text-primary"
              }`}
          >
            <span>{name}</span>
          </Button>
        );
      })}
    </div>
  );
}

export default Levels;
