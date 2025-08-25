import WorkoutTimeComponent from "@/src/components/questions/3/workout-time";
import { getWorkoutTimeAPI } from "@/src/services/mutations/questions";

async function WorkoutTime() {
  const workoutTimes = await getWorkoutTimeAPI();
  return <WorkoutTimeComponent workoutTimes={workoutTimes} />;
}

export default WorkoutTime;
