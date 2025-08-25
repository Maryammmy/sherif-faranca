"use client";

import InputErrorMessage from "@/src/components/InputErrorMsg";
import Loader from "@/src/components/loader/Loader";
import { Button } from "@/src/components/ui/Button";
import { Label } from "@/src/components/ui/Label";
import PasswordInput from "@/src/components/ui/PasswordInput";
import { useQueryParams } from "@/src/lib/utils";
import { ResetPassword, resetPasswordSchema } from "@/src/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { resetPasswordAPI } from "@/src/services/mutations/auth";
function ChangePasswordForm() {
  const { type, email, countryCode, number } = useQueryParams();
  const isNumber = type === "number";
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPassword>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
  });
  const onSubmit = async (data: ResetPassword) => {
    const payload = isNumber
      ? {
          countryCode,
          phoneNumber: number,
        }
      : {
          email,
        };
    const response = await resetPasswordAPI({ ...data, ...payload });
    if (response?.success === true) {
      toast.success(response?.message);
      setTimeout(() => {
        router.push(isNumber ? "/signin?type=number" : "/signin?type=email");
      }, 500);
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <form className="py-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">New Password</Label>
        <div
          className={`p-3 w-full border rounded-md focus-within:border-primary ${
            errors.newPassword ? "border-red-500" : "border-gray-400"
          }`}
        >
          <PasswordInput
            {...register("newPassword")}
            placeholder="Password"
            className="w-full"
          />
        </div>
        {errors.newPassword && (
          <InputErrorMessage msg={errors.newPassword.message} />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">Confirm Password</Label>
        <div
          className={`p-3 w-full border rounded-md focus-within:border-primary ${
            errors.confirmPassword ? "border-red-500" : "border-gray-400"
          }`}
        >
          <PasswordInput
            {...register("confirmPassword")}
            placeholder="Confirm password"
            className="w-full"
          />
        </div>
        {errors.confirmPassword && (
          <InputErrorMessage msg={errors.confirmPassword.message} />
        )}
      </div>
      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full bg-primary text-white p-3 rounded-md font-medium"
      >
        {isSubmitting ? <Loader /> : "Change"}
      </Button>
    </form>
  );
}

export default ChangePasswordForm;
