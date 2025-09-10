import VideoSection from "./video-section";
import Sessions from "./sessions";
import FocusArea from "./focus-area";
import { ChevronLeft } from "lucide-react";
import { Link } from "@/src/i18n/navigation";

interface IProps {
  programId: string;
}
async function VideoPlayer({ programId }: IProps) {
  return (
    <div className="padding-layout space-y-4">
      <Link
        href={`/programs/${programId}/exercises`}
        className="flex items-center gap-2"
      >
        <ChevronLeft />
        <h2 className="text-lg font-medium text-gray-600">
          Back to My Program
        </h2>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
        <div className="lg:col-span-2 space-y-4">
          <VideoSection />
          <FocusArea />
        </div>
        <Sessions />
      </div>
    </div>
  );
}

export default VideoPlayer;
