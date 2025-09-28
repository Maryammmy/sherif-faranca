import { Button } from "@/src/components/ui/Button";
import { IQuestion } from "@/src/interfaces/questions";
import { cn } from "@/src/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "@/src/components/ui/Image";

interface IProps {
  idealBodies: IQuestion[];
  selectedIdealBody: number | null;
  handleSelectIdealBody: (id: number) => void;
}
function SelectIdealBodyTime({
  idealBodies,
  selectedIdealBody,
  handleSelectIdealBody,
}: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pt-5">
      {idealBodies?.map(({ id, name, imageUrl }) => (
        <Button
          key={id}
          onClick={() => handleSelectIdealBody(id)}
          className={cn(
            "bg-white relative flex flex-col gap-3 justify-center items-center p-6 shadow rounded-2xl border cursor-pointer transition-all duration-300 ease-in-out",
            selectedIdealBody === id &&
              "border-2 border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedIdealBody === id && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <div className="relative w-8 h-8 rounded overflow-hidden">
            <Image src={imageUrl} alt={name} fill />
          </div>
          <span className="text-secondary font-medium text-xl">{name}</span>
        </Button>
      ))}
    </div>
  );
}

export default SelectIdealBodyTime;
