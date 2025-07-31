"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { sendRegistrationAPI } from "@/services/otp";
import { Mail } from "lucide-react";
// import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
};

export default function SignupEmailForm() {
  // const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      console.log(data);
      const response = await sendRegistrationAPI(data);
      console.log(response);
      // router.push("/otp");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-5 space-y-5">
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">Email</Label>
        <div className="flex p-3 gap-1 items-center border border-gray-400 rounded-md">
          <Mail className="text-primary" />
          <Input
            className="flex-1 placeholder:text-gray-400"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Invalid email address",
              },
            })}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-white p-3 rounded-md font-medium cursor-pointer"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Create new account"}
      </Button>
    </form>
  );
}
