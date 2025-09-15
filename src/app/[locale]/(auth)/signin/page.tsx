import SigninComponent from "@/src/components/auth/signin";
import SystemLoader from "@/src/components/loader/SystemLoader";
import { Suspense } from "react";

function Signin() {
  return (
    <Suspense fallback={<SystemLoader />}>
      <SigninComponent />
    </Suspense>
  );
}
export default Signin;
