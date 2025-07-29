import { Flame, Play, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  id: number;
}
export default function DiscoverProgramsCard({ id }: IProps) {
  return (
    <div className="space-y-2">
      <div className="h-[250px] shadow-xl rounded-2xl overflow-hidden relative">
        <Image
          src="/recent-watched-card.jpg"
          alt="classic-class"
          className="object-cover"
          fill
        />
      </div>

      <div>
        <h3 className="text-gray-600 font-medium">Full Body Kpop Challenge</h3>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <TrendingUp />
          <span>Beginners</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Play />
          <span>Class</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
          <Flame />
          <span>Kcal</span>
        </div>
      </div>
      <Link
        href={`/programs/${id}`}
        className="flex justify-center items-center gap-2 bg-primary text-white py-3 px-5 rounded-full w-full font-medium"
      >
        <Play />
        <span className="">Start Program </span>
      </Link>
    </div>
  );
}
