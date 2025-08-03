import { Button } from "@/components/ui/Button";
import { Heart } from "lucide-react";
import Image from "next/image";

function HeartPulse() {
  return (
    <div className="border rounded-xl flex-1 min-h-0 flex h-full flex-col gap-1 justify-between py-5 items-center">
      <div className="flex items-center gap-3">
        <Button className="w-10 h-10 rounded-full bg-gray-200/70 flex items-center justify-center">
          <Heart size={20} className="text-[#F95555] fill-[#F95555]" />
        </Button>
        <h3 className="text-gray-950 font-medium">Pulse</h3>
      </div>
      <div className="relative w-full h-8 shrink-0">
        <Image src="/heart-pulse.jpg" alt="Pulse line" fill />
      </div>
      <div className="font-medium flex items-end gap-1">
        <span className="text-gray-700">90</span>
        <span className="text-secondary text-sm">PBM</span>
      </div>
    </div>
  );
}

export default HeartPulse;
