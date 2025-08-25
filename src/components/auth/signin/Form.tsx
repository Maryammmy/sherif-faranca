"use client";

import SigninEmailForm from "./signin-email/SigninEmailForm";
import SigninNumberForm from "./signin-number/SigninNumberForm";
import { useQueryParams } from "@/src/lib/utils";

function SigninForm() {
  const type = useQueryParams("type");
  return (
    <div>{type === "number" ? <SigninNumberForm /> : <SigninEmailForm />}</div>
  );
}

export default SigninForm;
