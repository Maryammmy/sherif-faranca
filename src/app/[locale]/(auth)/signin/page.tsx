import SigninComponent from "@/src/components/auth/signin";
import { Suspense } from "react";

function Signin() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SigninComponent />
    </Suspense>
  );
}
export default Signin;
