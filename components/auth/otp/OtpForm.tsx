"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import Loader from "@/components/loader/Loader";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import toast from "react-hot-toast";
import ResendOtp from "./ResendOtp";
import { verifyOtpAction } from "@/actions/otp";
import { IActionState } from "@/interfaces/form";

interface IProps {
  queryParams: Record<string, string>;
}
const initialState: IActionState = {
  success: false,
  message: "",
  errors: {},
};

export default function OtpForm({ queryParams }: IProps) {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const router = useRouter();
  const { type, email, countryCode, mobile } = queryParams;

  const [state, formAction, isPending] = useActionState<IActionState, FormData>(
    async (prevState, formData) => {
      const result = await verifyOtpAction(prevState, formData);
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

  const handleOTPChange = (val: string) => {
    if (/^\d*$/.test(val)) {
      setOtp(val);
    }
  };
  const resetTimer = () => {
    setTimeLeft(60);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);
  useEffect(() => {
    if (state.success) {
      let destination: string | undefined;

      switch (type) {
        case "register-email":
          destination = `/create-account?type=${type}&email=${email}`;
          break;
        case "register-number":
          destination = `/create-account?type=${type}`;
          break;
        case "forget-password":
          destination = `/change-password?email=${email}`;
          break;
      }

      if (!destination) return;

      const timer = setTimeout(() => router.push(destination), 500);
      return () => clearTimeout(timer);
    }
  }, [state.success, type, router, email]);

  return (
    <div className="py-5 space-y-5">
      <form action={formAction}>
        <div className="space-y-5">
          <div className="flex flex-col mx-auto w-fit">
            <InputOTP value={otp} onChange={handleOTPChange} maxLength={5}>
              <InputOTPGroup className="flex justify-between items-center gap-2 sm:gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-lg font-medium border border-gray-300 data-[active=true]:border-primary data-[active=true]:ring-1 data-[active=true]:ring-primary/30 rounded-md"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
            {/* Hidden inputs for the form */}
            <input type="hidden" name="otp" value={otp} />
            <input type="hidden" name="type" value={type} />
            {(type === "register-email" || type === "forget-password") &&
              email && <input type="hidden" name="email" value={email} />}
            {type === "register-number" && countryCode && mobile && (
              <>
                <input type="hidden" name="countryCode" value={countryCode} />
                <input type="hidden" name="mobile" value={mobile} />
              </>
            )}
          </div>
          <p className="text-sm text-secondary font-semibold text-center mb-4">
            {timeLeft > 0
              ? `Resend OTP in ${Math.floor(timeLeft / 60)}:${String(
                  timeLeft % 60
                ).padStart(2, "0")}`
              : `Didn't receive the code?`}
          </p>
          <Button
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-md font-medium"
            disabled={isPending}
          >
            {isPending ? <Loader /> : "Verify"}
          </Button>
        </div>
      </form>
      {timeLeft === 0 && (
        <ResendOtp queryParams={queryParams} onResend={resetTimer} />
      )}
    </div>
  );
}
