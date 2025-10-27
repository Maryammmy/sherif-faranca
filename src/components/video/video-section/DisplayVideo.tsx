import { Lock, LockOpen } from "lucide-react";
import CircularRing from "@/src/components/ui/CircularRing";
import { Button } from "@/src/components/ui/Button";

interface IProps {
  videoUrl: string;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  locked: boolean;
  setLocked: (val: boolean) => void;
  progress: number;
  formattedTime: string;
  kcal: number;
  isLoading: boolean;
}

const DisplayVideo = ({
  videoUrl,
  videoRef,
  locked,
  setLocked,
  progress,
  formattedTime,
  kcal,
  isLoading,
}: IProps) => {
  return (
    <div className="relative rounded-xl shadow-lg overflow-hidden">
      {/* 🎥 Video */}
      <video
        ref={videoRef}
        className="w-full h-[300px] sm:h-[600px] object-cover"
        controls={!locked}
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔒 Lock Button */}
      <Button
        onClick={() => setLocked(!locked)}
        className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full shadow hover:scale-110 transition z-20"
      >
        {locked ? <LockOpen /> : <Lock />}
      </Button>

      {/* 🕒 Progress Ring */}
      <div className="absolute top-4 left-4 w-16 h-16 z-20 bg-black/40 rounded-full overflow-hidden">
        <CircularRing
          value={progress}
          color={"#3e1492"}
          strokeWidth={8}
          text={formattedTime}
        />
      </div>

      {/* 🔥 Calories */}
      <div className="absolute top-[60%] sm:top-[75%] left-4 flex flex-col gap-1 items-center justify-center z-20">
        <span>🔥</span>
        <span className="bg-orange-500 text-white px-2 py-1 rounded-md font-medium text-sm">
          {Math.floor(kcal)} Kcal
        </span>
      </div>

      {/* 🌀 Loading Spinner Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-30">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default DisplayVideo;
