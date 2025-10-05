import HabitCard from "./Card";
import { IHealthHabit } from "@/src/interfaces/main/my-fit";

interface IProps {
  healthHabits: IHealthHabit[];
}
export default function Habits({ healthHabits }: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {healthHabits?.map((habit, index) => (
        <HabitCard key={index} habit={habit} />
      ))}
    </div>
  );
}
