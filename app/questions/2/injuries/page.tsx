import SelectInjury from "@/components/questions/2/injuries/SelectInjury";
import Shared from "@/components/questions/Shared";

function Injuries() {
  return (
    <Shared
      progresses={[100, 100, 0]}
      title="Have you Suffered injuries"
      coloredTitle="Recently ?"
      content={<SelectInjury />}
      backHref="/questions/2/workout-frequency"
      nextHref="/questions/3"
    />
  );
}

export default Injuries;
