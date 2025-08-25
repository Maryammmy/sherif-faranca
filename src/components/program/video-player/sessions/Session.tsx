import { Button } from "@/src/components/ui/Button";
import { Clock12 } from "lucide-react";
import Image from "next/image";

interface IProps {
  session: number;
}
function Session({ session }: IProps) {
  return (
    <Button className="p-3 text-start rounded-xl border hover:shadow cursor-pointer flex items-center gap-4">
      <div className="relative w-16 h-16 rounded-xl overflow-hidden">
        <Image
          src="/recommend-card.jpg"
          alt="session"
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <h2 className="font-bold text-sm">Session {session + 1}</h2>
        <div className="flex flex-col gap-0.5 text-sm text-gray-500 font-medium">
          <p>Basic Cardio Dance</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <p>🔥</p>
              <span>100 Kcal</span>
            </div>
            <div className="flex items-center gap-0.5">
              <Clock12 size={18} />
              <span>10 Min</span>
            </div>
          </div>
        </div>
      </div>
    </Button>
  );
}

export default Session;
