import Result from "@/src/components/questions/Result";

function BuildMuscle() {
  return (
    <Result
      progresses={[87.5, 0, 0]}
      img="build-muscle-result"
      title="Grasp the ideal pace oF"
      coloredTitle={{ lastColoredText: "muscle gain !" }}
      description="Building muscle requires a sensible mix of workouts and rest. We'll help you find your rhythm!"
      backHref="/questions/1/goal"
      nextHref="/questions/1/shape"
    />
  );
}

export default BuildMuscle;
