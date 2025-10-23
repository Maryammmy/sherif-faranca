import { Button } from "@/src/components/ui/Button";
import { ILevel } from "@/src/interfaces/main/discover";

interface IProps {
  levels: ILevel[];
}
function Levels({ levels }: IProps) {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
      {levels?.map(({ id, name }) => {
        return (
          <Button
            key={id}
            className="flex items-center capitalize border-gray-200 text-secondary gap-2 border rounded-md px-3 py-2 transition"
          >
            <span>{name}</span>
          </Button>
        );
      })}
    </div>
  );
}

export default Levels;
