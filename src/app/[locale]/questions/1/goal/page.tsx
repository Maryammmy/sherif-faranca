import GoalComponent from "@/src/components/questions/1/goal";
import { getGoalsAPI } from "@/src/services/mutations/questions";

async function Goal() {
  const goals = await getGoalsAPI();
  return <GoalComponent goals={goals} />;
}

export default Goal;
