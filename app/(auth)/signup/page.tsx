import SignupEmailComponent from "@/components/auth/signup";
import { Suspense } from "react";

function Signup() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupEmailComponent />
    </Suspense>
  );
}

export default Signup;
