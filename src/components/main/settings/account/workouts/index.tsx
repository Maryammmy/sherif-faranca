"use client";
import Header from "./Header";
import Workouts from "./Workouts";
import WorkoutSections from "./WorkoutSections";
import {
  WorkoutHistoryTime,
  WorkoutSection,
} from "@/src/types/main/settings/account/workouts";
import { useRouter } from "@/src/i18n/navigation";
import { useQueryParams } from "@/src/lib/utils";

function WorkoutsGroup() {
  const { section = "history", time = "today" } = useQueryParams();
  const router = useRouter();
  const handleSelectSection = (section: WorkoutSection) => {
    if (section === "history") {
      router.replace(`/settings/account/workouts?section=history&time=${time}`);
    } else {
      router.replace(`/settings/account/workouts?section=${section}`);
    }
  };
  const handleSelectTime = (time: WorkoutHistoryTime) => {
    router.replace(`/settings/account/workouts?section=history&time=${time}`);
  };
  return (
    <div className="padding-layout space-y-5">
      <Header />
      <WorkoutSections
        selectedSection={section}
        handleSelectSection={handleSelectSection}
        selectedTime={time}
        handleSelectTime={handleSelectTime}
      />
      <Workouts section={section} time={time} />
    </div>
  );
}

export default WorkoutsGroup;
