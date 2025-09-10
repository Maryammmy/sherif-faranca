import DiscoverComponent from "@/src/components/main/discover";
import { Suspense } from "react";
function Discover() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DiscoverComponent />
    </Suspense>
  );
}

export default Discover;
