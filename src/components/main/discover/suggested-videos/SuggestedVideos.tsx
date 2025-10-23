import { ISuggestedVideo } from "@/src/interfaces/main/discover";
import SuggestedVideoCard from "./Card";
import { SkeletonCard } from "@/src/components/skeleton/Card";
import { EmptyStatePage } from "@/src/components/ui/empty-state/EmptyStatePage";

interface IProps {
  videos: ISuggestedVideo[] | undefined;
}
function SuggestedVideos({ videos }: IProps) {
  return (
    <div className="grid gap-5 py-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {!videos ? (
        <SkeletonCard count={4} />
      ) : videos?.length ? (
        videos?.map((video) => (
          <SuggestedVideoCard key={video?.id} video={video} />
        ))
      ) : (
        <EmptyStatePage message="No videos found" />
      )}
    </div>
  );
}

export default SuggestedVideos;
