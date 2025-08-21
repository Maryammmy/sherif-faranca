"use client";

import SignupEmailForm from "./signup-email/SignupEmailForm";
import SignupNumberForm from "./signup-number/SignupNumberForm";
import { useQueryParams } from "@/lib/utils";

function SignupForm() {
  const type = useQueryParams("type");
  return (
    <div>{type === "number" ? <SignupNumberForm /> : <SignupEmailForm />}</div>
  );
}

export default SignupForm;
