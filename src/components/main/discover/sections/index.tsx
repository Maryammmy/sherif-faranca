import { useDiscoverVideos, useDiscoverWorkouts } from "@/src/hooks/discover";
import Durations from "./Durations";
import FoucsAreas from "./foucs-area";
import Levels from "./Levels";
import { IVideos, IWorkouts } from "@/src/interfaces/main/discover";
import RecommendClass from "../recommend-class";
import PopularTraining from "../popular-training";
import { SkeletonCard } from "@/src/components/skeleton/Card";

interface IProps {
  selectedSection: string;
}
function Sections({ selectedSection }: IProps) {
  const { data: workoutsData } = useDiscoverWorkouts(selectedSection);
  const { data: videosData } = useDiscoverVideos(selectedSection);
  const workouts: IWorkouts = workoutsData?.data;
  const videos: IVideos = videosData?.data;
  const isVideo = selectedSection === "videos";
  const foucsAreas = isVideo
    ? videos?.filterBodyFocsArea
    : workouts?.filterBodyFocsArea;
  const levels = isVideo ? videos?.levels : workouts?.levels;
  const durations = isVideo ? videos?.durationRanges : workouts?.durationRanges;
  const renderSkeleton = () => (
    <div className="space-y-5">
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center">
        <SkeletonCard count={6} className="w-20 h-20 rounded-full" />
      </div>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center">
        <SkeletonCard count={6} className="w-40 h-8" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        <SkeletonCard count={4} className="h-[270px]" />
      </div>
    </div>
  );
  console.log(workouts, videos);
  if (!isVideo && !workouts) return renderSkeleton();
  if (isVideo && !videos) return renderSkeleton();
  return (
    <>
      <div className="py-5 space-y-5">
        <FoucsAreas foucsAreas={foucsAreas} />
        <Levels levels={levels} />
        <Durations durations={durations} />
      </div>
      {isVideo ? (
        <PopularTraining suggestions={videos?.suggestedVideos} />
      ) : (
        <RecommendClass suggestions={workouts?.suggestedPrograms} />
      )}
    </>
  );
}

export default Sections;
