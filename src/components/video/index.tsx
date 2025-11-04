"use client";
import VideoSection from "./video-section";
import Sessions from "./sessions";
import FocusArea from "./focus-area";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import { useVideo } from "@/src/hooks";
import { IVideo } from "@/src/interfaces/video";
import { SingleSkeletonCard, SkeletonCard } from "../skeleton/Card";
import { useLocale } from "next-intl";

interface IProps {
  videoId: string;
}
function Video({ videoId }: IProps) {
  const locale = useLocale();
  const isAr = locale === "ar";
  const ChevronIcon = isAr ? ChevronRight : ChevronLeft;
  const { data } = useVideo(videoId);
  const video: IVideo = data?.data;
  return (
    <div className="padding-layout space-y-4">
      {!data ? (
        <>
          <SingleSkeletonCard className="h-10 max-w-sm" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
            <div className="lg:col-span-2 space-y-4">
              <SingleSkeletonCard className="h-[500px]" />
              <div className="flex flex-wrap gap-4">
                <SkeletonCard count={5} className="w-40 h-10" />
              </div>
            </div>
            <div className="flex flex-col gap-4 max-h-[500px]">
              <SkeletonCard count={5} className="h-[100px]" />
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <Link href={`/`} className="flex items-center gap-2">
            <ChevronIcon />
            <h1 className="text-xl font-medium text-gray-600">
              {video?.title}
            </h1>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
            <div className="lg:col-span-2 space-y-4">
              <VideoSection videoUrl={video?.videoUrl} videoId={video?.id} />
              <FocusArea areas={video?.focusAreas} />
            </div>
            <Sessions
              classBySession={video?.classBySession}
              classBySong={video?.classBySong}
              videoId={videoId}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Video;
