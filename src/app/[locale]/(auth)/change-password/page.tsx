import ChangePasswordComponent from "@/src/components/auth/change-password";
import SystemLoader from "@/src/components/loader/SystemLoader";
import { Suspense } from "react";

function ChangePassword() {
  return (
    <Suspense fallback={<SystemLoader />}>
      <ChangePasswordComponent />
    </Suspense>
  );
}
export default ChangePassword;
