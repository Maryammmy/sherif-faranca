"use client";
import { useEffect, useState } from "react";
import Result from "@/src/components/questions/Result";
import { useTranslations } from "next-intl";

function BMI() {
  const t = useTranslations("bmi");
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
      title = t("title18");
      coloredTitle.firstColoredText = `${t("subTitle18")} (${bmi})`;
      description = t("description18", { bmi });
    } else if (bmi < 25) {
      title = t("title25");
      coloredTitle.firstColoredText = `${t("subTitle25")} ${bmi}`;
      description = t("description25", { bmi });
    } else if (bmi < 30) {
      title = t("title30");
      coloredTitle.firstColoredText = `${t("subTitle30")} ${bmi}`;
      description = t("description30", { bmi });
    } else {
      title = t("title");
      coloredTitle.firstColoredText = `${t("subTitle")} ${bmi}`;
      description = t("description", { bmi });
    }
  }

  return (
    <Result
      progresses={[62.5, 0, 0]}
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
