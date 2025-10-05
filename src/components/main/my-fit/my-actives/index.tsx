import { IAchievement, IHealthHabit } from "@/src/interfaces/main/my-fit";
import Title from "../Title";
import Grid from "./Grid";

interface IProps {
  achievement: IAchievement;
  healthHabits: IHealthHabit[];
}
function MyActives({ achievement, healthHabits }: IProps) {
  return (
    <div className="flex flex-col gap-5">
      <Title title="My actives" />
      <Grid achievement={achievement} healthHabits={healthHabits} />
    </div>
  );
}

export default MyActives;
