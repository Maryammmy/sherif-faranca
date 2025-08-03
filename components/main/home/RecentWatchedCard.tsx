import Image from "next/image";
import {
  Clock12,
  EllipsisVertical,
  MoveUpRight,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function RecentWatchedCard() {
  return (
    <div className="relative rounded-2xl overflow-hidden text-white h-[250px] shadow-lg">
      {/* Background image */}
      <Image
        src="/recent-watched-card.jpg"
        alt="Workout"
        fill
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      {/* Content */}
      <div className="absolute z-20 inset-0 p-4 flex flex-col justify-between gap-2">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-200 font-medium">Mixed Course</p>
            <span className="text-xs bg-primary p-2 rounded-lg inline-block mt-1">
              Cardio
            </span>
          </div>
          <Button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-gray-500">
              <EllipsisVertical />
            </span>
          </Button>
        </div>
        {/* Center Section */}
        <div className="flex justify-between gap-2">
          {/* Title + Icons */}
          <div>
            <h3 className="text-lg font-bold">Dance & Work Out</h3>
            <div className="flex items-center gap-4 text-sm mt-2">
              <div className="flex items-center gap-1 text-gray-300 font-medium">
                <UserRound />
                <span>Beginners</span>
              </div>
              <div className="flex items-center gap-1 text-gray-300 font-medium">
                <Clock12 />
                <span>2 hours</span>
              </div>
            </div>
          </div>
          {/* Progress circle */}
          <div className="relative w-12 h-12">
            <svg className="w-full h-full">
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="transparent"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="4"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="transparent"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="125.6"
                strokeDashoffset="31.4"
                strokeLinecap="round"
                transform="rotate(-90 24 24)"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
              75%
            </span>
          </div>
        </div>
        {/* Bottom Section */}
        <div>
          <Button className="w-full bg-white text-black rounded-full py-2 px-4 flex justify-between items-center text-sm font-medium">
            Continue the class
            <div className="bg-primary text-white rounded-full flex items-center justify-center w-8 h-8 ml-2">
              <MoveUpRight />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
