import { Button } from "@/src/components/ui/Button";
import SuggestedVideos from "./SuggestedVideos";
import { ISuggestedVideo } from "@/src/interfaces/main/discover";

interface IProps {
  videos: ISuggestedVideo[] | undefined;
}
function SuggestedVideo({ videos }: IProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-700 text-lg font-semibold capitalize">
          Suggested Videos
        </h2>
        <Button className="border-b border-secondary text-secondary font-medium">
          <span>View All</span>
        </Button>
      </div>
      <SuggestedVideos videos={videos} />
    </div>
  );
}

export default SuggestedVideo;
