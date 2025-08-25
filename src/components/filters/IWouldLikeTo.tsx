import { IFilter } from "@/src/interfaces/filters";
import { Button } from "../ui/Button";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface IProps {
  iWouldLikeTo: IFilter[];
  value: number | null;
  onChange: (id: number) => void;
}

function IWouldLikeTo({ iWouldLikeTo, value, onChange }: IProps) {
  return (
    <div>
      <h2 className="text-gray-700 font-bold">I&apos;d Like To</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 py-5">
        {iWouldLikeTo?.map(({ id, name, imageUrl }) => {
          const isActive = value === id;

          return (
            <Button
              key={id}
              onClick={() => onChange(id)}
              className={cn(
                "bg-white relative flex flex-col sm:flex-row gap-4 sm:justify-between items-center px-6 py-8 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
                isActive && "border-2 border-primary ring-2 ring-primary/30"
              )}
            >
              {isActive && (
                <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
              )}
              <span className="text-gray-700 font-bold text-xl sm:text-base xl:text-xl capitalize">
                {name}
              </span>
              <div className="w-50 sm:w-30 md:w-40 xl:w-50 h-[150px] shrink-0 relative rounded-2xl overflow-hidden">
                <Image src={imageUrl} alt={name} fill />
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default IWouldLikeTo;
