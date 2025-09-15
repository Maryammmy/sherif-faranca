import OtpComponent from "@/src/components/auth/otp";
import SystemLoader from "@/src/components/loader/SystemLoader";
import { Suspense } from "react";

function Otp() {
  return (
    <Suspense fallback={<SystemLoader />}>
      <OtpComponent />
    </Suspense>
  );
}

export default Otp;
