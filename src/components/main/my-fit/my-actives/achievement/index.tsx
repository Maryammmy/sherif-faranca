import { IAchievement } from "@/src/interfaces/main/my-fit";
import AchievementCard from "./AchievementCard";

interface IProps {
  achievement: IAchievement;
}
function Achievement({ achievement }: IProps) {
  return <AchievementCard achievement={achievement} />;
}

export default Achievement;
