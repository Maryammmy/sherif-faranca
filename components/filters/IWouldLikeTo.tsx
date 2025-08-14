import { IFilter } from "@/interfaces/filters";
import { useState } from "react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface IProps {
  iWouldLikeTo: IFilter[];
}

function IWouldLikeTo({ iWouldLikeTo }: IProps) {
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);
  const handleSelectGoal = (id: number) => {
    setSelectedGoal(id);
  };
  return (
    <div>
      <h2 className="text-gray-700 font-bold">I,d Like to</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 py-5">
        {iWouldLikeTo?.map(({ id, name, imageUrl }) => (
          <Button
            key={id}
            onClick={() => handleSelectGoal(id)}
            className={cn(
              "bg-white relative flex flex-col sm:flex-row gap-4 sm:justify-between items-center p-4 sm:px-6 sm:py-8 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
              selectedGoal === id &&
                "border-2 border-primary ring-2 ring-primary/30"
            )}
          >
            {selectedGoal === id && (
              <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
            )}
            <h5 className="text-center text-gray-700 font-bold text-xl sm:text-base xl:text-xl capitalize">
              {name}
            </h5>
            <div className="w-50 sm:w-30 md:w-40 xl:w-50 h-[150px] shrink-0 relative rounded-2xl overflow-hidden">
              <Image src={imageUrl} alt={name} fill />
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
export default IWouldLikeTo;
