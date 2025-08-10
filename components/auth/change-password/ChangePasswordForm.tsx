"use client";

import InputErrorMessage from "@/components/InputErrorMsg";
import Loader from "@/components/loader/Loader";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import PasswordInput from "@/components/ui/PasswordInput";
import { handleClientError, useQueryParams } from "@/lib/utils";
import { ResetPasswordData, resetPasswordSchema } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { resetPasswordAPI } from "@/services/auth";
function ChangePasswordForm() {
  const router = useRouter();
  const email = useQueryParams("email");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
  });
  const onSubmit = async (data: ResetPasswordData) => {
    try {
      const response = await resetPasswordAPI({ ...data, email });

      if (response?.success === true) {
        toast.success(response?.message);
        setTimeout(() => {
          router.push("/signin");
        }, 500);
      }
    } catch (error) {
      handleClientError(error);
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
