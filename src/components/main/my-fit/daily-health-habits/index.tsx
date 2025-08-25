import Title from "../Title";
import Habits from "./Habits";

function DailyHealthHabits() {
  return (
    <div className="flex flex-col gap-5">
      <Title title="Daily health habits" />
      <Habits />
    </div>
  );
}

export default DailyHealthHabits;
