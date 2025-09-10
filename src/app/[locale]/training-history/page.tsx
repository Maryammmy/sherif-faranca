import TrainingHistoryComponent from "@/src/components/training-history";
import { Suspense } from "react";

function TrainingHistory() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrainingHistoryComponent />
    </Suspense>
  );
}

export default TrainingHistory;
