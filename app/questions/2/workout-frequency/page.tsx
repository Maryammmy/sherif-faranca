import SelectWorkoutFrequency from "@/components/questions/2/workout-frequency/SelectWorkoutFrequency";
import Shared from "@/components/questions/Shared";

function WorkoutFrequency() {
  return (
    <Shared
      progresses={[100, 66.66, 0]}
      title="how often you like to"
      coloredTitle="work out ?"
      content={<SelectWorkoutFrequency />}
      backHref="/questions/2/ideal-body-time"
      nextHref="/questions/2/injuries"
    />
  );
}

export default WorkoutFrequency;
