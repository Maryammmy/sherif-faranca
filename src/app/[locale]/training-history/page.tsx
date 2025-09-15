import SystemLoader from "@/src/components/loader/SystemLoader";
import TrainingHistoryComponent from "@/src/components/training-history";
import { Suspense } from "react";

function TrainingHistory() {
  return (
    <Suspense fallback={<SystemLoader />}>
      <TrainingHistoryComponent />
    </Suspense>
  );
}

export default TrainingHistory;
