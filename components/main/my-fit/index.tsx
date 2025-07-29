import DailyHealthHabits from "./daily-health-habits";
import MyActives from "./my-actives";
import FavoriteTraining from "./my-favorite-training";
import TrainingHistory from "./training-history";

function MyFit() {
  return (
    <div className="flex flex-col gap-5">
      <MyActives />
      <DailyHealthHabits />
      <TrainingHistory />
      <FavoriteTraining />
    </div>
  );
}

export default MyFit;
