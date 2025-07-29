import SelectWorkoutTime from "@/components/questions/3/workout-time/SelectWorkoutTime";
import Shared from "@/components/questions/Shared";

function WorkoutTime() {
  return (
    <Shared
      progresses={[100, 100, 66.66]}
      title="What is best time for you to"
      coloredTitle="work out ?"
      content={<SelectWorkoutTime />}
      backHref="/questions/3/fitness-level"
      nextHref="/questions/3/music-preference"
    />
  );
}

export default WorkoutTime;
