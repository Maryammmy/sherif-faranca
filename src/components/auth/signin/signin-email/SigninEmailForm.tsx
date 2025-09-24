"use client";

import InputErrorMessage from "@/src/components/InputErrorMsg";
import Loader from "@/src/components/loader/Loader";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { Label } from "@/src/components/ui/Label";
import PasswordInput from "@/src/components/ui/PasswordInput";
import { setToken } from "@/src/lib/utils";
import { SigninWithEmail, signinWithEmailSchema } from "@/src/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { Link, useRouter } from "@/src/i18n/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signinWithEmailAPI } from "@/src/services/mutations/auth";
function SignInEmailForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninWithEmail>({
    resolver: zodResolver(signinWithEmailSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SigninWithEmail) => {
    const response = await signinWithEmailAPI(data);
    if (response?.success === true) {
      const token = response?.data?.token;
      const isAnswared = response?.data?.isAnswared;
      if (token) {
        await setToken(token);
      }
      toast.success(response?.message);
      setTimeout(() => {
        const path = isAnswared ? "/" : "/questions/1";
        router.push(path);
        window.location.reload();
      }, 500);
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <form className="py-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">Email</Label>
        <div
          className={`flex p-3 gap-2 items-center border rounded-md focus-within:border-primary ${
            errors.email ? "border-red-500" : "border-gray-400"
          }`}
        >
          <Mail className="text-primary" size={22} />
          <Input
            className="w-full"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        {errors.email && <InputErrorMessage msg={errors.email.message} />}
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">Password</Label>
        <div
          className={`p-3 w-full border rounded-md focus-within:border-primary ${
            errors.password ? "border-red-500" : "border-gray-400"
          }`}
        >
          <PasswordInput
            {...register("password")}
            placeholder="Password"
            className="w-full"
          />
        </div>
        {errors.password && <InputErrorMessage msg={errors.password.message} />}
      </div>
      <div className="flex items-center justify-end">
        {/* <div className="flex items-center gap-1">
          <Input className="accent-primary h-4 w-4" type="checkbox" />
          <span className="text-[#574F4AB2] font-medium">Remember me</span>
        </div> */}
        <div>
          <Link
            href="/forget-password?type=email"
            className="text-primary font-medium"
          >
            Forget Password ?
          </Link>
        </div>
      </div>
      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full bg-primary text-white p-3 rounded-md font-medium"
      >
        {isSubmitting ? <Loader /> : "Sign In"}
      </Button>
    </form>
  );
}

export default SignInEmailForm;
