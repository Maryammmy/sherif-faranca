import ContentResult from "@/src/components/questions/ContentResult";
import ContinueAndSkipButtons from "@/src/components/questions/ContinueAndSkipButtons";

function FitnessGoals() {
  return (
    <div className="min-h-screen">
      <div className="padding-layout">
        <ContentResult
          img="keep-fit-result"
          title="Ready to"
          coloredTitle={{ lastColoredText: "Crush Your Fitness Goals ?" }}
          description="You’re just a few questions away from a personalized plan built for your success. Want to keep going?"
        />
      </div>
      <ContinueAndSkipButtons continueHref="/questions/2" />
    </div>
  );
}

export default FitnessGoals;
