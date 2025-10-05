import { IAchievement, IHealthHabit } from "@/src/interfaces/main/my-fit";
import Achievement from "./achievement";
import Habits from "./habits";
// import HeartPulse from "./HeartPulse";

interface IProps {
  achievement: IAchievement;
  healthHabits: IHealthHabit[];
}
function Grid({ achievement, healthHabits }: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
      <Achievement achievement={achievement} />
      <Habits healthHabits={healthHabits} />
    </div>
  );
}

export default Grid;
