import VideoComponent from "@/src/components/video";

export default async function Video({
  params,
}: {
  params: Promise<{ videoId: string }>;
}) {
  const { videoId } = await params;
  return (
    <>
      <VideoComponent videoId={videoId} />
    </>
  );
}
