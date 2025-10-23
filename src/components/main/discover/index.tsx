"use client";

import { DiscoverSection } from "@/src/types/main/discover";
import { useRouter } from "@/src/i18n/navigation";
import DiscoverSections from "./DiscoverSections";
import { useQueryParams } from "@/src/lib/utils";
import Sections from "./sections";

function Discover() {
  const section = useQueryParams("section") || "workouts";
  const router = useRouter();
  const handleSelectSection = (section: DiscoverSection) => {
    router.replace(`/discover?section=${section}`);
  };
  return (
    <div>
      <DiscoverSections
        selectedSection={section}
        handleSelectSection={handleSelectSection}
      />
      <Sections selectedSection={section} />
    </div>
  );
}

export default Discover;
