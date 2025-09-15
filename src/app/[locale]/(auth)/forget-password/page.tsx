import ForgetPasswordComponent from "@/src/components/auth/forget-password";
import SystemLoader from "@/src/components/loader/SystemLoader";
import { Suspense } from "react";

function ForgetPassword() {
  return (
    <Suspense fallback={<SystemLoader />}>
      <ForgetPasswordComponent />
    </Suspense>
  );
}

export default ForgetPassword;
