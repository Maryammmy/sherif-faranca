import { Button } from "@/src/components/ui/Button";
import Image from "@/src/components/ui/Image";

function PickForYouCard() {
  return (
    <div className="relative rounded-2xl overflow-hidden text-white h-[250px] shadow-lg w-full">
      {/* Background image */}
      <Image src="/workout.jpg" alt={"workout"} fill className="object-cover" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      {/* Content */}
      <div className="absolute z-20 inset-0 p-4 flex flex-col justify-between gap-2">
        {/* Top Section */}
        <div>
          <span className="text-xs font-medium bg-primary p-2 rounded-lg inline-block max-w-full truncate capitalize">
            Intermediate
          </span>
        </div>
        {/* Bottom Section */}
        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-col gap-1 font-medium">
            <p className="text-sm">30-Day Belly Fat Burn</p>
            <p className="text-xs text-gray-300">
              Slash Belly Fat & Improve You Body
            </p>
          </div>
          <div>
            <Button className="bg-primary px-3 py-1 rounded-2xl">Join</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickForYouCard;
