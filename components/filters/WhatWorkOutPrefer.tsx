import { ISupFilter } from "@/interfaces/filters";
import { Button } from "../ui/Button";

interface IProps {
  whatWorkOutPrefer: ISupFilter[];
}
function WhatWorkOutPrefer({ whatWorkOutPrefer }: IProps) {
  return (
    <div>
      <h2 className="text-gray-700 font-bold">What Work Out Prefer</h2>
      <div className="py-5 flex flex-wrap gap-3 sm:gap-4 text-secondary font-medium">
        {whatWorkOutPrefer?.map(({ id, name }) => (
          <Button
            key={id}
            className="border border-gray-200 rounded-md px-3 py-2"
          >
            <span>{name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default WhatWorkOutPrefer;
