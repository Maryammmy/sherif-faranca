"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import Loader from "@/components/loader/Loader";
import InputErrorMessage from "@/components/InputErrorMsg";
import { sendRegistrationEmailAction } from "@/actions/otp";
import { IActionState } from "@/interfaces/form";

const initialState: IActionState = {
  success: false,
  errors: {},
  message: "",
};

export default function SignupEmailForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState<IActionState, FormData>(
    async (prevState, formData) => {
      const result = await sendRegistrationEmailAction(prevState, formData);
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
      const email = state.data?.email;
      const timer = setTimeout(() => {
        router.push(`/otp?type=register-email&email=${email}`);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [state.success, router, state.data?.email]);

  return (
    <form action={formAction} className="py-5 space-y-5">
      <div className="flex flex-col gap-1">
        <Label>Email</Label>
        <div className="flex p-3 gap-1 items-center border border-gray-400 rounded-md">
          <Mail className="text-primary" />
          <Input name="email" className="w-full" placeholder="Email" />
        </div>
        {state.errors?.email && (
          <InputErrorMessage msg={state.errors.email[0]} />
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
