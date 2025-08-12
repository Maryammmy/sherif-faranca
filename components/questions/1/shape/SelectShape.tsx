import { Button } from "@/components/ui/Button";
import { IQuestion } from "@/interfaces/questions";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface IProps {
  shapes: IQuestion[];
  selectedShape: null | number;
  handleSelectShape: (id: number) => void;
}
function SelectShape({ shapes, selectedShape, handleSelectShape }: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
      {shapes?.map(({ id, name, imageUrl }) => (
        <Button
          key={id}
          onClick={() => handleSelectShape(id)}
          className={cn(
            "bg-white relative flex flex-col sm:flex-row gap-4 items-center sm:justify-between p-4 sm:px-6 sm:py-8 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
            selectedShape === id &&
              "border-2 border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedShape === id && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <h5 className="text-center text-gray-700 font-bold text-2xl capitalize">
            {name}
          </h5>
          <div className="w-40 sm:w-56 h-[200px] relative rounded-2xl overflow-hidden">
            <Image src={imageUrl} alt={name} fill />
          </div>
        </Button>
      ))}
    </div>
  );
}

export default SelectShape;
