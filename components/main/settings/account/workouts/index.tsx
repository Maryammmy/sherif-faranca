"use client";
import { useState } from "react";
import Header from "./Header";
import Workouts from "./Workouts";
import WorkoutSections from "./WorkoutSections";

function WorkoutsGroup() {
  const [selectedSection, setSelectedSection] = useState("history");
  const handleSelectSection = (section: string) => {
    setSelectedSection(section);
  };
  return (
    <div className="padding-layout space-y-5">
      <Header />
      <WorkoutSections
        selectedSection={selectedSection}
        handleSelectSection={handleSelectSection}
      />
      <Workouts selectedSection={selectedSection} />
    </div>
  );
}

export default WorkoutsGroup;
