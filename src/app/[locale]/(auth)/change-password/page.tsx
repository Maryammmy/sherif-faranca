import ChangePasswordComponent from "@/src/components/auth/change-password";
import { Suspense } from "react";

function ChangePassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChangePasswordComponent />
    </Suspense>
  );
}
export default ChangePassword;
