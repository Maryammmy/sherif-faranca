"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { SignInschema } from "@/schema/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(SignInschema),
    mode: "onChange",
  });

  const onSubmit = (data: unknown) => {
    // Handle sign in logic
    console.log(data);
  };
  return (
    <form className="py-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">Email</Label>
        <div
          className={`flex p-3 gap-1 items-center border rounded-md focus-within:border-primary ${
            errors.email
              ? "border-red-500"
              : touchedFields.email
              ? "border-green-500"
              : "border-gray-400"
          }`}
        >
          <Mail className="text-primary" />
          <Input
            className="flex-1 placeholder:text-gray-400"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        {touchedFields.email && !errors.email && (
          <span className="text-green-500 text-sm">Valid email</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">Password</Label>
        <div
          className={`flex p-3 gap-1 items-center border rounded-md focus-within:border-primary ${
            errors.password
              ? "border-red-500"
              : touchedFields.password
              ? "border-green-500"
              : "border-gray-400"
          }`}
        >
          <LockKeyhole className="text-primary" />
          <Input
            className="flex-1 placeholder:text-gray-400"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <Button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff strokeWidth={2.5} className="text-primary" />
            ) : (
              <Eye strokeWidth={2.5} className="text-primary" />
            )}
          </Button>
        </div>
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
        {touchedFields.password && !errors.password && (
          <span className="text-green-500 text-sm">Valid password</span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Input className="accent-primary h-4 w-4" type="checkbox" />
          <span className="text-[#574F4AB2] font-medium">Remember me</span>
        </div>
        <div>
          <Link href="/forget-password" className="text-primary font-medium">
            Forget Password ?
          </Link>
        </div>
      </div>
      <Button className="w-full bg-primary text-white p-3 rounded-md font-medium">
        Sign In
      </Button>
    </form>
  );
}

export default SignInForm;
