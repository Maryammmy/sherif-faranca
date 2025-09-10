"use client";

import { DiscoverSection } from "@/src/types/main/discover";
import { useRouter } from "@/src/i18n/navigation";
import DiscoverSections from "./DiscoverSections";
import { useQueryParams } from "@/src/lib/utils";
import Sections from "./sections";
import PicksForYou from "./picks-for-you";
import PopularTraining from "./popular-training";
import FatBurning from "./fat-burning";
import HitWorkout from "./hit-workout";
import RecommendClass from "./recommend-class";

function Discover() {
  const section = useQueryParams("section");
  const router = useRouter();
  const handleSelectSection = (section: DiscoverSection = "workout") => {
    router.replace(`/discover?section=${section}`);
  };
  return (
    <div>
      <DiscoverSections
        selectedSection={section}
        handleSelectSection={handleSelectSection}
      />
      <Sections />
      <PicksForYou />
      <PopularTraining />
      <FatBurning />
      <HitWorkout />
      <RecommendClass />
    </div>
  );
}

export default Discover;
