import { ISupFilter } from "@/src/interfaces/filters";
import { Button } from "../ui/Button";
import { cn } from "@/src/lib/utils";

interface IProps {
  whatWorkOutPrefer: ISupFilter[];
  value: number[];
  onChange: (id: number) => void;
}

function WhatWorkOutPrefer({ whatWorkOutPrefer, value, onChange }: IProps) {
  return (
    <div>
      <h2 className="text-gray-700 font-bold">What Work Out Prefer</h2>
      <div className="py-5 flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
        {whatWorkOutPrefer?.map(({ id, name }) => {
          const isActive = value.includes(id);

          return (
            <Button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              className={cn(
                "border rounded-md px-3 py-2 transition",
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

export default WhatWorkOutPrefer;
