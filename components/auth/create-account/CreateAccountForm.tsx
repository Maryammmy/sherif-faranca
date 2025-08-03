"use client";

import { useActionState, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createAccountAction } from "@/actions/signup/createAccountAction";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import InputErrorMessage from "@/components/InputErrorMsg";
import Loader from "@/components/loader/Loader";
import "react-phone-input-2/lib/style.css";
import PhoneField from "./PhoneField";
import { DatePicker } from "@/components/ui/date-picker";
import PasswordInput from "@/components/ui/PasswordInput";
import { IActionState } from "@/interfaces/form";
import { useQueryParams } from "@/lib/utils";

const initialState: IActionState = {
  success: false,
  errors: {},
  message: "",
};

export default function CreateAccountForm() {
  // const router = useRouter();
  const [resetFieldsTrigger, setResetFieldsTrigger] = useState(false);
  const email = useQueryParams("email");
  const [state, formAction, isPending] = useActionState<IActionState, FormData>(
    async (prevState, formData) => {
      setResetFieldsTrigger(true);
      const result = await createAccountAction(prevState, formData);
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

  return (
    <form action={formAction} className="space-y-5 py-3">
      {/* Email */}
      <Input type="hidden" name="email" value={email} />
      {/* First Name */}
      <div className="flex flex-col gap-1">
        <Label className="font-medium text-secondary">First Name</Label>
        <div className="flex items-center gap-1 p-3 border rounded-md">
          <Input name="firstName" placeholder="First name" className="w-full" />
        </div>
        {state.errors?.firstName && (
          <InputErrorMessage msg={state.errors.firstName[0]} />
        )}
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-1">
        <Label className="font-medium text-secondary">Last Name</Label>
        <div className="flex items-center gap-1 p-3 border rounded-md">
          <Input name="lastName" placeholder="Last name" className="w-full" />
        </div>
        {state.errors?.lastName && (
          <InputErrorMessage msg={state.errors.lastName[0]} />
        )}
      </div>

      {/* Birth date */}
      <div className="flex flex-col gap-1">
        <Label className="font-medium text-secondary">Birth Date</Label>
        <div className="flex items-center gap-1 p-3 border rounded-md">
          <DatePicker name="birthDate" resetTrigger={resetFieldsTrigger} />
        </div>
        {state.errors?.birthDate && (
          <InputErrorMessage msg={state.errors.birthDate[0]} />
        )}
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">Phone number</Label>
        <div className="flex items-center gap-1 p-3 border rounded-md">
          <PhoneField resetTrigger={resetFieldsTrigger} />
        </div>
        {state.errors?.phoneNumber && (
          <InputErrorMessage msg={state.errors.phoneNumber[0]} />
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <Label className="font-medium text-secondary">Password</Label>
        <div className="flex items-center gap-1 p-3 border rounded-md">
          <PasswordInput
            name="password"
            className="w-full"
            placeholder="Password"
          />
        </div>
        {state.errors?.password && (
          <InputErrorMessage msg={state.errors.password[0]} />
        )}
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col gap-1">
        <Label className="font-medium text-secondary">Confirm Password</Label>
        <div className="flex items-center gap-1 p-3 border rounded-md">
          <PasswordInput
            name="confirmPassword"
            className="w-full"
            placeholder="Confirm password"
          />
        </div>
        {state.errors?.confirmPassword && (
          <InputErrorMessage msg={state.errors.confirmPassword[0]} />
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
