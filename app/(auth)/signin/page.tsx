import SignInComponent from "@/components/auth/signin";
import { Suspense } from "react";

function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInComponent />
    </Suspense>
  );
}

export default SignIn;
