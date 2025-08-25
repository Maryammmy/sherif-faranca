import FitnessLevelComponent from "@/src/components/questions/3/fitness-level";
import { getLevelsAPI } from "@/src/services/mutations/questions";

async function FitnessLevel() {
  const fitnessLevels = await getLevelsAPI();
  return <FitnessLevelComponent fitnessLevels={fitnessLevels} />;
}

export default FitnessLevel;
