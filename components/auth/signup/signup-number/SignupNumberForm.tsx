"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import Loader from "@/components/loader/Loader";
import InputErrorMessage from "@/components/InputErrorMsg";
import { IActionState } from "@/interfaces/form";
import { sendRegistrationWithNumberAction } from "@/actions/auth";
import PhoneField from "@/components/ui/PhoneField";

const initialState: IActionState = {
  success: false,
  errors: {},
  message: "",
};

export default function SignupNumberForm() {
  const router = useRouter();
  const [resetFieldsTrigger, setResetFieldsTrigger] = useState(false);
  const [state, formAction, isPending] = useActionState<IActionState, FormData>(
    async (prevState, formData) => {
      const result = await sendRegistrationWithNumberAction(
        prevState,
        formData
      );
      if (result.message) {
        console.log(result);
        if (result.success) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      }
      return result;
    },
    initialState
  );
  useEffect(() => {
    const timeoutId = setTimeout(() => setResetFieldsTrigger(false), 100);
    return () => clearTimeout(timeoutId);
  }, [resetFieldsTrigger]);
  useEffect(() => {
    if (state.success) {
      const countryCode = state.data?.countryCode;
      const mobile = state.data?.mobile;
      const timer = setTimeout(() => {
        router.push(
          `/otp?type=register-number&countryCode=${countryCode}&mobile=${mobile}`
        );
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [state.success, router, state.data?.countryCode, state.data?.mobile]);

  return (
    <form action={formAction} className="py-5 space-y-5">
      <div className="flex flex-col gap-1">
        <Label className="font-medium text-secondary">Phone Number</Label>
        <div className="flex p-3 gap-2 items-center border border-gray-400 rounded-md">
          <PhoneField
            resetTrigger={resetFieldsTrigger}
            serverAction
            numberName="mobile"
            countryCodeName="countryCode"
          />
        </div>
        {state.errors?.mobile && (
          <InputErrorMessage msg={state.errors.mobile[0]} />
        )}
      </div>
      <Button
        type="submit"
        className="w-full bg-primary text-white p-3 rounded-md font-medium"
        disabled={isPending}
      >
        {isPending ? <Loader /> : "Create new account"}
      </Button>
    </form>
  );
}
