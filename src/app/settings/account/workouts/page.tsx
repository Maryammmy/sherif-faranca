import WorkoutsGroup from "@/src/components/main/settings/account/workouts";
import { Suspense } from "react";

function Workouts() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkoutsGroup />
    </Suspense>
  );
}

export default Workouts;
