import { IHistory } from "@/src/interfaces/main/my-fit";
import TrainingHistoryCard from "./Card";
import { EmptyStateGrid } from "@/src/components/ui/empty-state/EmptyStateGrid";

interface IProps {
  trainingHistory: IHistory[];
}

function TrainingHistories({ trainingHistory }: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {trainingHistory?.length ? (
        trainingHistory.map((history) => (
          <TrainingHistoryCard key={history.id} history={history} />
        ))
      ) : (
        <EmptyStateGrid message="No training history found" />
      )}
    </div>
  );
}

export default TrainingHistories;
