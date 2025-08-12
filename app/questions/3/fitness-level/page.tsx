import FitnessLevelComponent from "@/components/questions/3/fitness-level";
import { getLevelsAPI } from "@/services/questions";

async function FitnessLevel() {
  const fitnessLevels = await getLevelsAPI();
  return <FitnessLevelComponent fitnessLevels={fitnessLevels} />;
}

export default FitnessLevel;
