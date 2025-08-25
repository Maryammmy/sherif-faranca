import Result from "@/src/components/questions/Result";

function LoseWeight() {
  return (
    <Result
      progresses={[87.5, 0, 0]}
      img="bmi"
      title="make losing Weight Fane &"
      coloredTitle={{ lastColoredText: "Breeze !" }}
      description="Dropping pounds is not just a pipe dream anymore. We're here to make it happen for you!"
      backHref="/questions/1/goal"
      nextHref="/questions/1/shape"
    />
  );
}

export default LoseWeight;
