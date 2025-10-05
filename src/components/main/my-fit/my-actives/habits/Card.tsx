import { IHealthHabit } from "@/src/interfaces/main/my-fit";
import { Link } from "@/src/i18n/navigation";

interface IProps {
  habit: IHealthHabit;
}

function HabitCard({ habit }: IProps) {
  const { goal, title, progress } = habit;
  return (
    <Link
      href={`/calories`}
      className="border rounded-2xl p-4 shadow-sm flex flex-col gap-2"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-gray-600 font-medium">{title}</h3>
        {/* {icon} */}
      </div>
      <div className="text-2xl font-bold flex items-baseline gap-1">
        <span>{progress}</span>
        {/* <span className="text-secondary text-base">{unit}</span> */}
      </div>
      <p className="text-gray-400 text-sm font-medium">{goal}</p>
    </Link>
  );
}

export default HabitCard;
