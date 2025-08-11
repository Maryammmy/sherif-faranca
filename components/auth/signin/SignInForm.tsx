"use client";

import InputErrorMessage from "@/components/InputErrorMsg";
import Loader from "@/components/loader/Loader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import PasswordInput from "@/components/ui/PasswordInput";
import { handleClientError, setToken } from "@/lib/utils";
import { SigninData, signinSchema } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signinWithEmailAPI } from "@/services/auth";
function SignInForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninData>({
    resolver: zodResolver(signinSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SigninData) => {
    try {
      const response = await signinWithEmailAPI(data);
      if (response?.success === true) {
        const token = response?.token;
        const isAnswared = response?.isAnswared;
        if (token) {
          setToken(token);
        }
        toast.success(response?.message);
        setTimeout(() => {
          if (isAnswared) {
            router.push("/");
          } else {
            router.push("/questions/1/intro");
          }
        }, 500);
      }
    } catch (error) {
      handleClientError(error);
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
          <Link href="/forget-password" className="text-primary font-medium">
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

export default SignInForm;
