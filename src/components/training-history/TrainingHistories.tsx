import TrainingHistoryCard from "./Card";

function TrainingHistories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5 pt-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <TrainingHistoryCard key={index} />
      ))}
    </div>
  );
}

export default TrainingHistories;
