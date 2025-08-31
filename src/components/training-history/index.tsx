import TrainingHistories from "./TrainingHistories";
import TrainingHistoryHeader from "./Header";
import TrainingHistoryTime from "./Time";

function TrainingHistory() {
  return (
    <div className="padding-layout">
      <TrainingHistoryHeader />
      <TrainingHistoryTime />
      <TrainingHistories />
    </div>
  );
}

export default TrainingHistory;
