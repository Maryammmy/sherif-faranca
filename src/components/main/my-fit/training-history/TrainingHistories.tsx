import WorkoutsCard from "../../settings/account/workouts/Card";

function TrainingHistories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {Array.from({ length: 4 }).map((_, index) => (
        <WorkoutsCard key={index} />
      ))}
    </div>
  );
}

export default TrainingHistories;
