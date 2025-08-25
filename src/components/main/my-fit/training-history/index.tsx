import WorkoutTimeFilters from "../../settings/account/workouts/WorkoutTimeFilters";
import Title from "../Title";
import TrainingHistories from "./TrainingHistories";

function TrainingHistory() {
  return (
    <div className="flex flex-col gap-5">
      <Title title="Training history" />
      <WorkoutTimeFilters />
      <TrainingHistories />
    </div>
  );
}

export default TrainingHistory;
