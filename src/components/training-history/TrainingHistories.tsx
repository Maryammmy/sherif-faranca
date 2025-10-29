import { IWorkout } from "@/src/interfaces/main/settings/account/workouts";
import TrainingHistoryCard from "./Card";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";
import { useTranslations } from "next-intl";

interface IProps {
  trainingHistories: IWorkout[];
}
function TrainingHistories({ trainingHistories }: IProps) {
  const t = useTranslations("myFit.myTrainingHistory");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5 pt-5">
      {trainingHistories?.length ? (
        trainingHistories?.map((workout) => (
          <TrainingHistoryCard key={workout?.id} workout={workout} />
        ))
      ) : (
        <EmptyStatePage message={t("noTrainingHistoryFound")} />
      )}
    </div>
  );
}

export default TrainingHistories;
