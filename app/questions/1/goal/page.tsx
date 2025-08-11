import GoalComponent from "@/components/questions/1/goal";
import { getGoalsAPI } from "@/services/questions";

async function Goal() {
  const goals = await getGoalsAPI();
  return <GoalComponent goals={goals} />;
}

export default Goal;
