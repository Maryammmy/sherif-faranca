import { habits } from "@/data/main/my-fit";
import HabitCard from "./Card";

export default function Habits() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
      {habits.map((habit, index) => (
        <HabitCard key={index} habit={habit} />
      ))}
    </div>
  );
}
