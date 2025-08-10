"use client";
import { useEffect, useState } from "react";
import SelectGender from "./SelectGender";
import Shared from "@/components/questions/Shared";

function Gender() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  useEffect(() => {
    const savedIsMale = sessionStorage.getItem("ismale");
    if (savedIsMale !== null) {
      const isMale = JSON.parse(savedIsMale);
      setSelectedGender(isMale ? "male" : "female");
    }
  }, []);
  const handleSelectGender = (gender: string) => {
    setSelectedGender(gender);
    const isMale = gender.toLowerCase() === "male";
    sessionStorage.setItem("ismale", JSON.stringify(isMale));
  };
  return (
    <Shared
      progresses={[37.5, 0, 0]}
      title="What's your"
      coloredTitle="gender ?"
      description="This data will help us tailor your workout to match your body shape and daily work"
      content={
        <SelectGender
          selectedGender={selectedGender}
          handleSelectGender={handleSelectGender}
        />
      }
      backHref="/questions/1/intro"
      nextHref="/questions/1/foucs-area"
      isNextDisabled={!selectedGender}
    />
  );
}

export default Gender;
