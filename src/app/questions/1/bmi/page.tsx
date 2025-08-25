import Result from "@/src/components/questions/Result";

function BMI() {
  return (
    <Result
      progresses={[62.5, 0, 0]}
      img="bmi"
      title="strength training with a diet"
      coloredTitle={{ firstColoredText: "BMI below 18.5" }}
      description={
        <>
          with <span className="text-primary">a BMI below 18.5</span>, combine
          strength training with a diet rich in protein and healthy fat to
          support optimal muscle gain and overall health.
        </>
      }
      backHref="/questions/1/weight"
      nextHref="/questions/1/goal"
    />
  );
}

export default BMI;
