"use client";

import { useRef, useState, useEffect } from "react";
import DisplayVideo from "./DisplayVideo";
import Buttons from "./Buttons";
import { baseURL } from "@/src/services";
import { usePathname } from "@/src/i18n/navigation";

interface IProps {
  videoUrl: string;
  videoId: number;
}

const VideoSection = ({ videoUrl, videoId }: IProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pathname = usePathname();
  const [time, setTime] = useState(0);
  const [kcal, setKcal] = useState(0);
  const [locked, setLocked] = useState(false);
  const [duration, setDuration] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  const minutes = Math.floor(time / 60);
  const seconds = String(time % 60).padStart(2, "0");
  const formattedTime = `${minutes}:${seconds}`;
  const progress = (time / duration) * 100;
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(Math.floor(video.duration));
      setIsLoading(false); // لما الفيديو يجهز، نوقف التحميل
    };
    const handleTimeUpdate = () => {
      const currentTime = Math.floor(video.currentTime);
      setTime(currentTime);
      setKcal(+((currentTime / duration) * 100).toFixed(1));
    };
    const handleEnded = () => {
      setTime(duration);
      setKcal(100);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [duration]);
  useEffect(() => {
    const sendProgress = () => {
      if (time > 0) {
        const payload = new Blob(
          [JSON.stringify({ videoId, watchedSeconds: time })],
          { type: "application/json" }
        );
        navigator.sendBeacon(`${baseURL}/api/Video/update-wateched`, payload);
        console.log("✅ Progress sent:", { videoId, time });
      }
    };
    window.addEventListener("beforeunload", sendProgress);
    return () => {
      window.removeEventListener("beforeunload", sendProgress);
    };
  }, [pathname, time, videoId]);

  const handleReset = () => {
    setTime(0);
    setKcal(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="space-y-4">
      <DisplayVideo
        videoUrl={videoUrl}
        videoRef={videoRef}
        locked={locked}
        setLocked={setLocked}
        progress={progress}
        formattedTime={formattedTime}
        kcal={kcal}
        isLoading={isLoading}
      />
      <Buttons handleReset={handleReset} />
    </div>
  );
};

export default VideoSection;
