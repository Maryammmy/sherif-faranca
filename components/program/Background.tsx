import { Button } from "@/components/ui/Button";
import { Clock12, Heart, MoveLeft, Play, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface IProps {
  href: string;
}
function Background({ href }: IProps) {
  return (
    <div>
      <div className="w-full relative h-[250px] sm:h-[300px] lg:h-[320px]">
        <div className="absolute inset-0 bg-black/50 z-[5] pointer-events-none" />
        <div className="w-full h-full absolute z-10">
          <div className="flex flex-col justify-between gap-5 p-5 pb-10 sm:p-10 sm:pb-20 h-full">
            <div className="flex justify-between items-center">
              <Link
                href={href}
                className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white"
              >
                <MoveLeft className="text-gray-700 w-4 h-4 sm:w-6 sm:h-6" />
              </Link>
              <Button className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white">
                <Heart className="text-gray-700 w-4 h-4 sm:w-6 sm:h-6" />
              </Button>
            </div>
            <div className="space-y-3">
              <header>
                <h1 className=" max-w-3xs text-2xl sm:text-4xl font-semibold text-white">
                  Massive Upper Body Plane
                </h1>
              </header>
              <div className="flex gap-4 items-center text-gray-300 text-sm font-medium">
                <div className="flex items-center gap-1">
                  <TrendingUp />
                  <span>Beginners</span>
                </div>
                <div className="flex items-center gap-1">
                  <Play />
                  <span>Class</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock12 />
                  <span>2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/program-background.jpg"
          alt="Program background"
          fill
          priority
        />
      </div>
    </div>
  );
}

export default Background;
