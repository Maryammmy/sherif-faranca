import VideoPlayerComponent from "@/src/components/program/video-player";

async function VideoPlayer({
  params,
}: {
  params: Promise<{ programId: string }>;
}) {
  const { programId } = await params;
  return <VideoPlayerComponent programId={programId} />;
}

export default VideoPlayer;
