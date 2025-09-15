import SignupEmailComponent from "@/src/components/auth/signup";
import SystemLoader from "@/src/components/loader/SystemLoader";
import { Suspense } from "react";

function Signup() {
  return (
    <Suspense fallback={<SystemLoader />}>
      <SignupEmailComponent />
    </Suspense>
  );
}

export default Signup;
