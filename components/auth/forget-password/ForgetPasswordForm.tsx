"use client";
import { sendResetPasswordAction } from "@/actions/auth";
import InputErrorMessage from "@/components/InputErrorMsg";
import Loader from "@/components/loader/Loader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import PhoneField from "@/components/ui/PhoneField";
import { IActionState } from "@/interfaces/form";
import { useQueryParams } from "@/lib/utils";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState: IActionState = {
  success: false,
  errors: {},
  message: "",
};

export default function ForgetPasswordEmailForm() {
  const [resetFieldsTrigger, setResetFieldsTrigger] = useState(false);
  const type = useQueryParams("type");
  const router = useRouter();
  const [state, formAction, isPending] = useActionState<IActionState, FormData>(
    async (prevState, formData) => {
      setResetFieldsTrigger(true);
      const result = await sendResetPasswordAction(prevState, formData);
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
    if (state.success) {
      const timer = setTimeout(() => {
        if (type === "number") {
          const countryCode = state?.data?.countryCode;
          const number = state?.data?.mobile;
          router.push(
            `/otp?type=forget-password-number&countryCode=${countryCode}&number=${number}`
          );
        } else {
          const email = state?.data?.email;
          router.push(`/otp?type=forget-password-email&email=${email}`);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [state.success, state?.data, router, type]);
  useEffect(() => {
    const timeoutId = setTimeout(() => setResetFieldsTrigger(false), 100);
    return () => clearTimeout(timeoutId);
  }, [resetFieldsTrigger]);
  return (
    <form action={formAction} className="py-5 space-y-5">
      <Input type="hidden" name="type" value={type} />
      {type === "number" ? (
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
          {state.errors?.countryCode && (
            <InputErrorMessage msg={state.errors.countryCode[0]} />
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <Label className="text-secondary font-medium">Email</Label>
          <div className="flex p-3 gap-2 items-center border border-gray-400 rounded-md">
            <Mail className="text-primary" size={22} />
            <Input className="w-full" placeholder="Email" name="email" />
          </div>
          {state.errors?.email && (
            <InputErrorMessage msg={state.errors.email[0]} />
          )}
        </div>
      )}
      <Button
        disabled={isPending}
        type="submit"
        className="w-full bg-primary text-white p-3 rounded-md font-medium cursor-pointer"
      >
        {isPending ? <Loader /> : "Send Verification Code"}
      </Button>
    </form>
  );
}
