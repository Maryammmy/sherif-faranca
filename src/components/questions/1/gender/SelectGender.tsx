import { Button } from "@/src/components/ui/Button";
import { genders } from "@/src/data/questions";
import { cn } from "@/src/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface IProps {
  selectedGender: string | null;
  handleSelectGender: (gender: string) => void;
}
function SelectGender({ selectedGender, handleSelectGender }: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-5">
      {genders.map((gender) => (
        <Button
          key={gender}
          onClick={() => handleSelectGender(gender)}
          className={cn(
            "bg-white relative flex flex-col gap-2 items-center justify-center p-6 border-2 shadow rounded-2xl cursor-pointer transition-all duration-300 ease-in-out",
            selectedGender === gender && "border-primary ring-2 ring-primary/30"
          )}
        >
          {selectedGender === gender && (
            <CheckCircle2 className="absolute top-2 right-2 text-primary w-6 h-6 transition-opacity opacity-100" />
          )}
          <div className="w-56 h-[250px] relative rounded-2xl overflow-hidden">
            <Image src={`/${gender}.png`} alt={gender} fill />
            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white blur-md" />
          </div>
          <h5 className="text-center text-gray-700 font-bold text-2xl capitalize">
            {gender}
          </h5>
        </Button>
      ))}
    </div>
  );
}

export default SelectGender;
