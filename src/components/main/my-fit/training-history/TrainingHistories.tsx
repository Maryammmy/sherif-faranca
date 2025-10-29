import { IHistory } from "@/src/interfaces/main/my-fit";
import TrainingHistoryCard from "./Card";
import { EmptyStateGrid } from "@/src/components/ui/empty-state/EmptyStateGrid";
import { useTranslations } from "next-intl";

interface IProps {
  trainingHistory: IHistory[];
}

function TrainingHistories({ trainingHistory }: IProps) {
  const t = useTranslations("myFit.myTrainingHistory");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {trainingHistory?.length ? (
        trainingHistory.map((history) => (
          <TrainingHistoryCard key={history.id} history={history} />
        ))
      ) : (
        <EmptyStateGrid message={t("noTrainingHistoryFound")} />
      )}
    </div>
  );
}

export default TrainingHistories;
