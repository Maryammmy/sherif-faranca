import ForgetPasswordComponent from "@/components/auth/forget-password";
import { Suspense } from "react";

function ForgetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgetPasswordComponent />
    </Suspense>
  );
}

export default ForgetPassword;
