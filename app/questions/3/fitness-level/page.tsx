import SelectFitnessLevel from "@/components/questions/3/fitness-level/SelectFitnessLevel";
import Shared from "@/components/questions/Shared";

function FitnessLevel() {
  return (
    <Shared
      progresses={[100, 100, 33.33]}
      title="how would you rate your"
      coloredTitle="fitness level ?"
      content={<SelectFitnessLevel />}
      backHref="/questions/2/injuries"
      nextHref="/questions/3/workout-time"
    />
  );
}

export default FitnessLevel;
