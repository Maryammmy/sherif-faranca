"use client";
import { useEffect, useState } from "react";
import Result from "@/src/components/questions/Result";

function BMI() {
  const [bmi, setBmi] = useState<number | null>(null);

  useEffect(() => {
    const height = Number(sessionStorage.getItem("heightCm"));
    const weight = Number(sessionStorage.getItem("weightKg"));

    if (height && weight) {
      const calculatedBmi = weight / (height / 100) ** 2;
      setBmi(Number(calculatedBmi.toFixed(1))); // رقم عشري واحد
    }
  }, []);

  let title = "";
  const coloredTitle = { firstColoredText: "" };
  let description: React.ReactNode = "";

  if (bmi !== null) {
    if (bmi < 18.5) {
      title = "Strength training with a diet";
      coloredTitle.firstColoredText = `BMI below 18.5 (${bmi})`;
      description = (
        <>
          with <span className="text-primary">a BMI of {bmi}</span>, combine
          strength training with a diet rich in protein and healthy fat to
          support optimal muscle gain and overall health.
        </>
      );
    } else if (bmi < 25) {
      title = "Balanced training & nutrition";
      coloredTitle.firstColoredText = `Normal BMI (18.5 - 24.9) - ${bmi}`;
      description = (
        <>
          Your <span className="text-primary">BMI is {bmi}</span>. Focus on
          maintaining a balance between strength training, cardio, and healthy
          nutrition.
        </>
      );
    } else if (bmi < 30) {
      title = "Cardio & calorie management";
      coloredTitle.firstColoredText = `Overweight (25 - 29.9) - ${bmi}`;
      description = (
        <>
          Your <span className="text-primary">BMI is {bmi}</span>. Prioritize
          cardio workouts and a calorie deficit diet to reach a healthier weight
          range.
        </>
      );
    } else {
      title = "Medical & professional guidance";
      coloredTitle.firstColoredText = `Obese (30+) - ${bmi}`;
      description = (
        <>
          Your <span className="text-primary">BMI is {bmi}</span>. Work closely
          with a healthcare provider and follow a structured exercise and diet
          plan.
        </>
      );
    }
  }

  return (
    <Result
      progresses={[62.5, 0, 0]} // هتفضل زي ما هي
      img="bmi"
      title={title}
      coloredTitle={coloredTitle}
      description={description}
      backHref="/questions/1/weight"
      nextHref="/questions/1/goal"
    />
  );
}

export default BMI;
