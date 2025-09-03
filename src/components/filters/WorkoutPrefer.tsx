import { ISubFilter } from "@/src/interfaces/filters";
import { Button } from "../ui/Button";
import { cn } from "@/src/lib/utils";

interface IProps {
  whatWorkoutPrefer: ISubFilter[];
  value: number[];
  onChange: (id: number) => void;
}

function WhatWorkoutPrefer({ whatWorkoutPrefer, value, onChange }: IProps) {
  return (
    <div>
      <h2 className="text-gray-700 font-bold">What Workout Prefer</h2>
      <div className="py-5 flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
        {whatWorkoutPrefer.length ? (
          whatWorkoutPrefer?.map(({ id, name }) => {
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
          })
        ) : (
          <p className="col-span-full text-gray-500 text-center font-medium">
            No workout prefer found
          </p>
        )}
      </div>
    </div>
  );
}

export default WhatWorkoutPrefer;
