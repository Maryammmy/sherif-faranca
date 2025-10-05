"use client";
import VideoSection from "./video-section";
import Sessions from "./sessions";
import FocusArea from "./focus-area";
import { ChevronLeft } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import { useVideo } from "@/src/hooks";
import { IVideo } from "@/src/interfaces/video";

interface IProps {
  videoId: string;
}
function Video({ videoId }: IProps) {
  const { data } = useVideo(videoId);
  const video: IVideo = data?.data;
  console.log(data);
  return (
    <div className="padding-layout space-y-4">
      <Link href={`/`} className="flex items-center gap-2">
        <ChevronLeft />
        <h2 className="text-lg font-medium text-gray-600">{video?.title}</h2>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
        <div className="lg:col-span-2 space-y-4">
          <VideoSection />
          <FocusArea areas={video?.focusAreas} />
        </div>
        <Sessions />
      </div>
    </div>
  );
}

export default Video;
