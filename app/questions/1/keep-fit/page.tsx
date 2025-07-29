import Result from "@/components/questions/Result";

function KeepFit() {
  return (
    <Result
      progresses={[87.5, 0, 0]}
      img="keep-fit-result"
      title="Fitness doesn't mean always"
      coloredTitle={{ lastColoredText: "fatigue !" }}
      description="Health is consistency, not exhaustion few minutes a day brings you closer to a healthier you."
      backHref="/questions/1/goal"
      nextHref="/questions/1/shape"
    />
  );
}

export default KeepFit;
