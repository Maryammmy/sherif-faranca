"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";

function GenderSelector() {
  const [gender, setGender] = useState("male");

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-gray-400">Gender</label>
      <div className="grid grid-cols-2 gap-4">
        {genders.map((g) => (
          <Button
            type="button"
            key={g.value}
            onClick={() => setGender(g.value)}
            className={`py-1.5 rounded-md border font-medium ${
              gender === g.value ? "bg-primary text-white" : ""
            }`}
          >
            {g.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default GenderSelector;
