import SelectGoal from "@/components/questions/1/goal/SelectGoal";
import Shared from "@/components/questions/Shared";

function Goal() {
  return (
    <Shared
      progresses={[75, 0, 0]}
      title="What's your main"
      coloredTitle="goal ?"
      description="Your goal shapes your workout We'll tailor the best mix of cardio and strength training for you!"
      content={<SelectGoal />}
      backHref="/questions/1/bmi"
      nextHref="/questions/1/keep-fit"
    />
  );
}

export default Goal;
