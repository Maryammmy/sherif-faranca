"use client";

import TermsAndConditionsModal from "@/components/auth/signup/TermsAndConditionsModal";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { cn } from "@/lib/utils";
import { createProfileSchema } from "@/schema/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { gsap } from "gsap";
import {
  AlertCircle,
  CheckCircle,
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput, { CountryData } from "react-phone-input-2";

export default function CreateAccountForm() {
  const [openTerms, setOpenTerms] = useState(false);
  const {
    register,
    // handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(createProfileSchema),
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = gsap.utils.toArray<HTMLElement>(
        formRef.current?.children || []
      );

      gsap.from(children, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        clearProps: "transform",
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  // const onSubmit = (data: any) => console.log(data);

  return (
    <form
      ref={formRef}
      // onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 py-3"
    >
      <div className="grid grid-cols-2 gap-5">
        {/* First Name */}
        <div className="flex flex-col gap-1">
          <Label className="text-secondary font-medium">First Name</Label>
          <div
            className={cn(
              "flex items-center gap-1 p-3 border rounded-md",
              errors.firstName
                ? "border-red-500"
                : touchedFields.firstName && "border-green-500"
            )}
          >
            <Input
              className="w-full"
              {...register("firstName")}
              placeholder="First name"
            />
            {errors.firstName ? (
              <AlertCircle className="text-red-500" />
            ) : (
              touchedFields.firstName && (
                <CheckCircle className="text-green-500" />
              )
            )}
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1">
          <Label className="text-secondary font-medium">Last Name</Label>
          <div
            className={cn(
              "flex items-center gap-1 p-3 border rounded-md",
              errors.lastName
                ? "border-red-500"
                : touchedFields.lastName && "border-green-500"
            )}
          >
            <Input
              {...register("lastName")}
              className="w-full"
              placeholder="Last name"
            />
            {errors.lastName ? (
              <AlertCircle className="text-red-500" />
            ) : (
              touchedFields.lastName && (
                <CheckCircle className="text-green-500" />
              )
            )}
          </div>
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* ✅ Phone Number */}
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">Phone Number</Label>
        <div
          className={cn(
            "flex p-3 items-center border rounded-md",
            errors.phoneNumber
              ? "border-red-500"
              : touchedFields.phoneNumber && "border-green-500"
          )}
        >
          <PhoneInput
            onBlur={() => {
              trigger("phoneNumber");
              setValue("phoneNumber", getValues("phoneNumber"), {
                shouldTouch: true,
              });
            }}
            country="eg"
            enableSearch
            onChange={(value, country: CountryData) => {
              const dialCode = country.dialCode;
              const numberOnly = value.slice(dialCode.length);
              setValue("countryCode", dialCode);
              setValue("phoneNumber", numberOnly);
              trigger("phoneNumber");
            }}
            inputStyle={{
              width: "100%",
              border: "none",
              boxShadow: "none",
              height: "24px",
            }}
            buttonStyle={{
              border: "none",
              background: "transparent",
            }}
            containerStyle={{
              width: "100%",
            }}
          />
        </div>
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">Password</Label>
        <div
          className={cn(
            "flex p-3 gap-1 items-center border rounded-md",
            errors.password
              ? "border-red-500"
              : touchedFields.password && "border-green-500"
          )}
        >
          <LockKeyhole className="text-primary" />
          <Input
            {...register("password")}
            className="w-full"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
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
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">Confirm Password</Label>
        <div
          className={cn(
            "flex p-3 gap-1 items-center border rounded-md",
            errors.confirmPassword
              ? "border-red-500"
              : touchedFields.confirmPassword && "border-green-500"
          )}
        >
          <LockKeyhole className="text-primary" />
          <Input
            {...register("confirmPassword")}
            className="w-full"
            placeholder="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
          />
          <Button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff strokeWidth={2.5} className="text-primary" />
            ) : (
              <Eye strokeWidth={2.5} className="text-primary" />
            )}
          </Button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button
        onClick={() => setOpenTerms(true)}
        type="submit"
        className="w-full bg-primary text-white p-3 rounded-md font-medium"
      >
        Create new account
      </Button>
      <TermsAndConditionsModal
        open={openTerms}
        onClose={() => setOpenTerms(false)}
      />
    </form>
  );
}
