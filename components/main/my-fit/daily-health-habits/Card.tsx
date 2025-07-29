import { IHabit } from "@/interfaces/main/my-fit";

interface IProps {
  habit: IHabit;
}

function HabitCard({ habit }: IProps) {
  const { goal, icon, title, unit, value } = habit;
  return (
    <div className="border rounded-2xl p-4 shadow-sm flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-600 font-medium">{title}</h3>
        {icon}
      </div>
      <div className="text-2xl font-bold flex items-baseline gap-1">
        <span>{value}</span>
        <span className="text-gray-500 text-base">{unit}</span>
      </div>
      <p className="text-gray-400 text-sm font-medium">{goal}</p>
    </div>
  );
}

export default HabitCard;
