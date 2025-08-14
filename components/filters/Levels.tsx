import { ISupFilter } from "@/interfaces/filters";
import { Button } from "../ui/Button";

interface IProps {
  levels: ISupFilter[];
}
function Levels({ levels }: IProps) {
  return (
    <div>
      <h2 className="text-gray-700 font-bold">Levels</h2>
      <div className="py-5 flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
        {levels?.map(({ id, name }) => (
          <Button
            key={id}
            className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2"
          >
            {/* <span className="text-primary shrink-0">
                <Clock12 size={20} />
              </span> */}
            <span className="text-secondary">{name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Levels;
