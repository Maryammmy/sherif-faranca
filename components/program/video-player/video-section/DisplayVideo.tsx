import { Lock, LockOpen } from "lucide-react";
import CircularRing from "@/components/ui/CircularRing";
import Button from "@/components/ui/Button";

interface IProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  locked: boolean;
  setLocked: (val: boolean) => void;
  progress: number;
  formattedTime: string;
  kcal: number;
}

const DisplayVideo = ({
  videoRef,
  locked,
  setLocked,
  progress,
  formattedTime,
  kcal,
}: IProps) => {
  return (
    <div className="relative rounded-xl shadow-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-[300px] sm:h-[600px] object-cover"
        controls={!locked}
      >
        <source src={`/franca.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <Button
        onClick={() => setLocked(!locked)}
        className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full shadow hover:scale-110 transition"
      >
        {locked ? <LockOpen /> : <Lock />}
      </Button>
      <div className="absolute top-4 left-4 w-16 h-16">
        <CircularRing
          value={progress}
          color={"#3e1492"}
          strokeWidth={8}
          text={formattedTime}
        />
      </div>
      <div className="absolute top-[60%] sm:top-[75%] left-4 flex flex-col gap-1 items-center justify-center">
        <span>🔥</span>
        <span className="bg-orange-500 text-white px-2 py-1 rounded-md font-medium text-sm">
          {Math.floor(kcal)} Kcal
        </span>
      </div>
    </div>
  );
};

export default DisplayVideo;
