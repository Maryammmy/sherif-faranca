import SystemLoader from "@/src/components/loader/SystemLoader";
import WorkoutsGroup from "@/src/components/main/settings/account/workouts";
import { Suspense } from "react";

function Workouts() {
  return (
    <Suspense fallback={<SystemLoader />}>
      <WorkoutsGroup />
    </Suspense>
  );
}

export default Workouts;
