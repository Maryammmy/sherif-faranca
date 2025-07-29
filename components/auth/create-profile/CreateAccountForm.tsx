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

export default function CreateAccountForm() {
  const [openTerms, setOpenTerms] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(createProfileSchema),
    mode: "onChange",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Refs for input field animations
  const formRef = useRef<HTMLFormElement>(null);
  const inputFieldsRef = useRef<(HTMLDivElement | HTMLButtonElement | null)[]>(
    []
  );

  // Animation effect for input fields
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - hide all input fields
      gsap.set(inputFieldsRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95,
      });

      // Staggered entrance animation for input fields
      gsap.to(inputFieldsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.3, // 0.15 second delay between each field
        delay: 0.2, // Start after a short delay
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  // Handle input field focus animation
  // const handleInputFocus = (element: HTMLElement) => {
  //   gsap.to(element, {
  //     scale: 1.02,
  //     borderColor: "#5B2E9D", // primary color
  //     boxShadow: "0 0 0 3px rgba(91, 46, 157, 0.1)",
  //     duration: 0.3,
  //     ease: "power2.out",
  //   });
  // };

  // Handle input field blur animation
  // const handleInputBlur = (element: HTMLElement) => {
  //   gsap.to(element, {
  //     scale: 1,
  //     borderColor: "#9CA3AF", // gray-400
  //     boxShadow: "none",
  //     duration: 0.3,
  //     ease: "power2.out",
  //   });
  // };

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-3 py-3"
    >
      <div className="grid grid-cols-2 gap-5">
        <div
          ref={(el) => {
            inputFieldsRef.current[0] = el;
          }}
          className="flex flex-col gap-1"
        >
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
              {...register("firstName")}
              className="flex-1"
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
          {/* {touchedFields.firstName && !errors.firstName && (
            // <p className="text-green-500 text-sm">Valid user name</p>
          )} */}
        </div>
        <div
          ref={(el) => {
            inputFieldsRef.current[1] = el;
          }}
          className="flex flex-col gap-1"
        >
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
              className="flex-1"
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

      <div
        ref={(el) => {
          inputFieldsRef.current[2] = el;
        }}
        className="flex flex-col gap-1"
      >
        <Label className="text-secondary font-medium">Phone Number</Label>
        <div
          className={cn(
            "flex p-3 gap-1 items-center border rounded-md",
            errors.phoneNumber
              ? "border-red-500"
              : touchedFields.phoneNumber && "border-green-500"
          )}
        >
          <span className="text-primary">EG</span>
          <Input
            {...register("phoneNumber")}
            className="flex-1"
            placeholder="Enter phone number"
          />
        </div>
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div
        ref={(el) => {
          inputFieldsRef.current[3] = el;
        }}
        className="flex flex-col gap-1"
      >
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
            className="flex-1 placeholder:text-gray-400"
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

      <div
        ref={(el) => {
          inputFieldsRef.current[4] = el;
        }}
        className="flex flex-col gap-1"
      >
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
            className="flex-1 placeholder:text-gray-400"
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
        ref={(el) => {
          inputFieldsRef.current[5] = el;
        }}
        type="submit"
        className="w-full bg-primary text-white p-3 rounded-md font-medium cursor-pointer"
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
