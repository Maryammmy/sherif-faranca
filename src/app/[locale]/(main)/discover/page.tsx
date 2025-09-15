import SystemLoader from "@/src/components/loader/SystemLoader";
import DiscoverComponent from "@/src/components/main/discover";
import { Suspense } from "react";
function Discover() {
  return (
    <Suspense fallback={<SystemLoader />}>
      <DiscoverComponent />
    </Suspense>
  );
}

export default Discover;
