"use client";

import SigninEmailForm from "./signin-email/SigninEmailForm";
import SigninNumberForm from "./signin-number/signinNumberForm";
import { useQueryParams } from "@/lib/utils";

function SigninForm() {
  const type = useQueryParams("type");
  return (
    <div>{type === "number" ? <SigninNumberForm /> : <SigninEmailForm />}</div>
  );
}

export default SigninForm;
