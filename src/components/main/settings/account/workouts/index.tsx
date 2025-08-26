"use client";
import Header from "./Header";
import Workouts from "./Workouts";
import WorkoutSections from "./WorkoutSections";
import {
  WorkoutHistoryTime,
  WorkoutSection,
} from "@/src/types/main/settings/account/workouts";
import { useRouter } from "next/navigation";
import { useQueryParams } from "@/src/lib/utils";

function WorkoutsGroup() {
  const { section, time } = useQueryParams();
  // const [selectedSection, setSelectedSection] =
  //   useState<WorkoutSection>("history");
  // const [selectedTime, setSelectedTime] = useState<WorkoutHistoryTime>("today");
  const router = useRouter();
  const handleSelectSection = (section: WorkoutSection = "history") => {
    // setSelectedSection(section);
    if (section === "history") {
      router.push(`/settings/account/workouts?section=history&time=${time}`);
    } else {
      router.push(`/settings/account/workouts?section=${section}`);
    }
  };
  const handleSelectTime = (time: WorkoutHistoryTime = "today") => {
    // setSelectedTime(time);
    router.push(`/settings/account/workouts?section=history&time=${time}`);
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
      <Workouts />
    </div>
  );
}

export default WorkoutsGroup;
