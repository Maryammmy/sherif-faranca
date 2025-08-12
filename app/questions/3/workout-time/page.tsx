import WorkoutTimeComponent from "@/components/questions/3/workout-time";
import { getWorkoutTimeAPI } from "@/services/questions";

async function WorkoutTime() {
  const workoutTimes = await getWorkoutTimeAPI();
  return <WorkoutTimeComponent workoutTimes={workoutTimes} />;
}

export default WorkoutTime;
