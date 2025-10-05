import { ChartNoAxesColumnDecreasing } from "lucide-react";
import AchievementChart from "./AchievementChart";
import { IAchievement } from "@/src/interfaces/main/my-fit";

interface IProps {
  achievement: IAchievement;
}
function AchievementCard({ achievement }: IProps) {
  return (
    <div className="flex flex-col justify-between gap-5 border rounded-xl p-5 w-full">
      <div className="flex items-center gap-2">
        <div className="bg-[#FFDE21] rounded-full w-8 h-8 flex justify-center items-center">
          <ChartNoAxesColumnDecreasing
            strokeWidth={3}
            className="text-gray-700"
          />
        </div>
        <h2 className="font-medium text-lg text-gray-950 leading-none">
          Achievement
        </h2>
      </div>
      <AchievementChart progress={achievement?.progress}/>
      <div className="flex items-center justify-between gap-5 font-medium">
        <span className="text-secondary">Average</span>
        <span className="text-gray-700">{achievement?.average}%</span>
      </div>
    </div>
  );
}

export default AchievementCard;
