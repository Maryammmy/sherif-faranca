"use client";
import { sendResetPasswordAction } from "@/actions/auth";
import Loader from "@/components/loader/Loader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { IActionState } from "@/interfaces/form";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

const initialState: IActionState = {
  success: false,
  errors: {},
  message: "",
};

export default function ForgetPasswordForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState<IActionState, FormData>(
    async (prevState, formData) => {
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
      const email = state.data?.email;
      const timer = setTimeout(() => {
        router.push(`/otp?type=forget-password&email=${email}`);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [state.success, router, state.data?.email]);
  return (
    <form action={formAction} className="py-5 space-y-5">
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">Email</Label>
        <div className="flex p-3 gap-2 items-center border border-gray-400 rounded-md">
          <Mail className="text-primary" size={22} />
          <Input className="w-full" placeholder="Email" name="email" />
        </div>
      </div>
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
