"use client";

import { useRef, useState, useEffect } from "react";
import DisplayVideo from "./DisplayVideo";
import Buttons from "./Buttons";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [time, setTime] = useState(0);
  const [kcal, setKcal] = useState(0);
  const [locked, setLocked] = useState(false);
  const [duration, setDuration] = useState(6);

  const minutes = Math.floor(time / 60);
  const seconds = String(time % 60).padStart(2, "0");
  const formattedTime = `${minutes}:${seconds}`;
  const progress = (time / duration) * 100;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => setDuration(Math.floor(video.duration));
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
        videoRef={videoRef}
        locked={locked}
        setLocked={setLocked}
        progress={progress}
        formattedTime={formattedTime}
        kcal={kcal}
      />
      <Buttons handleReset={handleReset} />
    </div>
  );
};

export default VideoSection;
