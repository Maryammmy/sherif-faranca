import SelectIdealBodyTime from "@/components/questions/2/ideal-body-time/SelectIdealBodyTime";
import Shared from "@/components/questions/Shared";

function IdealBodyTime() {
  return (
    <Shared
      progresses={[100, 33.33, 0]}
      title="when last time had your"
      coloredTitle="ideal body ?"
      content={<SelectIdealBodyTime />}
      backHref="/questions/1/fitness-goals"
      nextHref="/questions/2/workout-frequency"
    />
  );
}

export default IdealBodyTime;
