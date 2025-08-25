import OtpComponent from "@/src/components/auth/otp";
import { Suspense } from "react";

function Otp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtpComponent />
    </Suspense>
  );
}

export default Otp;
