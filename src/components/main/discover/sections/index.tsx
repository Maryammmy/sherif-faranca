import { useEffect, useState } from "react";
import {
  useDiscoverFilterVideos,
  useDiscoverFilterWorkouts,
  useDiscoverVideos,
  useDiscoverWorkouts,
} from "@/src/hooks";
import Durations from "./Durations";
import FoucsAreas from "./foucs-area";
import Levels from "./Levels";
import {
  ISuggestedProgram,
  ISuggestedVideo,
  IVideos,
  IWorkouts,
} from "@/src/interfaces/main/discover";
import { SkeletonCard } from "@/src/components/skeleton/Card";
import { Button } from "@/src/components/ui/Button";
import Loader from "@/src/components/loader/Loader";
import SuggestedPrograms from "../suggested-programs";
import SuggestedVideo from "../suggested-videos";

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

  // ✅ كل الـ filters هنا:
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<number[]>([]);
  const [selectedLevelId, setSelectedLevelId] = useState<number | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<{
    MinHours: number | null;
    MaxHours: number | null;
  }>({ MinHours: null, MaxHours: null });

  // ✅ hooks الخاصة بالـ filters
  const {
    data: filteredWorkouts,
    fetchNextPage: fetchNextWorkoutsPage,
    hasNextPage: hasNextWorkoutsPage,
    isFetchingNextPage: isFetchingNextWorkouts,
  } = useDiscoverFilterWorkouts({
    section: selectedSection,
    focusAreaIds: selectedFocusAreas,
    minHours: selectedDuration.MinHours,
    maxHours: selectedDuration.MaxHours,
    levelId: selectedLevelId,
  });
  const {
    data: filteredVideos,
    fetchNextPage: fetchNextVideosPage,
    hasNextPage: hasNextVideosPage,
    isFetchingNextPage: isFetchingNextVideos,
  } = useDiscoverFilterVideos({
    section: selectedSection,
    focusAreaIds: selectedFocusAreas,
    minHours: selectedDuration.MinHours,
    maxHours: selectedDuration.MaxHours,
    levelId: selectedLevelId,
  });
  const workoutList: ISuggestedProgram[] | undefined =
    filteredWorkouts?.pages.flatMap((page) => page?.data?.items);
  const videoList: ISuggestedVideo[] | undefined =
    filteredVideos?.pages.flatMap((page) => page?.data?.items);
  // ✅ Reset filters لما نغير الـ tab (videos ↔ workouts)
  useEffect(() => {
    setSelectedFocusAreas([]);
    setSelectedLevelId(null);
    setSelectedDuration({ MinHours: null, MaxHours: null });
  }, [selectedSection]);

  // ✅ Handlers
  const handleFocusAreaSelect = (id: number) => {
    setSelectedFocusAreas((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleLevelSelect = (levelId: number) => {
    setSelectedLevelId((prev) => (prev === levelId ? null : levelId));
  };

  const handleDurationSelect = (min: number, max: number) => {
    setSelectedDuration({ MinHours: min, MaxHours: max });
  };

  const renderSkeleton = () => (
    <div className="space-y-5 py-5">
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

  if (!isVideo && !workoutsData && !filteredWorkouts) return renderSkeleton();
  if (isVideo && !videosData && !filteredVideos) return renderSkeleton();

  return (
    <>
      <div className="py-5 space-y-5">
        <FoucsAreas
          foucsAreas={foucsAreas}
          selectedFocusAreas={selectedFocusAreas}
          onSelectFocusArea={handleFocusAreaSelect}
        />
        <Levels
          levels={levels}
          selectedLevelId={selectedLevelId}
          onSelectLevel={handleLevelSelect}
        />
        <Durations
          durations={durations}
          selectedDuration={selectedDuration}
          onSelectDuration={handleDurationSelect}
        />
      </div>

      {isVideo ? (
        <SuggestedVideo videos={videoList} />
      ) : (
        <SuggestedPrograms programs={workoutList} />
      )}
      <div className="flex justify-center mt-5">
        {isVideo
          ? hasNextVideosPage && (
              <button
                onClick={() => fetchNextVideosPage()}
                disabled={isFetchingNextVideos}
                className="w-28 p-2 bg-primary text-white rounded-md font-medium disabled:opacity-50"
              >
                {isFetchingNextVideos ? <Loader /> : "Show More"}
              </button>
            )
          : hasNextWorkoutsPage && (
              <Button
                onClick={() => fetchNextWorkoutsPage()}
                disabled={isFetchingNextWorkouts}
                className="w-28 p-2 bg-primary text-white rounded-md font-medium disabled:opacity-50"
              >
                {isFetchingNextWorkouts ? <Loader /> : "Show More"}
              </Button>
            )}
      </div>
    </>
  );
}

export default Sections;
