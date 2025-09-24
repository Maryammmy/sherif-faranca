import Loader from "@/src/components/loader/Loader";
import { Button } from "@/src/components/ui/Button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/src/components/ui/input-otp";
import {
  VerifyEmail,
  verifyEmailSchema,
} from "@/src/schemas/main/settings/change-email";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ResendOtp from "./ResendOtp";
import { useQueryClient } from "@tanstack/react-query";
import { verifyEmailAPI } from "@/src/services/mutations/users";

interface IProps {
  onClose: () => void;
  newEmail: string;
}

function VerifyEmailForm({ onClose, newEmail }: IProps) {
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<VerifyEmail>({
    resolver: zodResolver(verifyEmailSchema),
    mode: "onChange",
    defaultValues: {
      otp: "",
      newEmail,
    },
  });

  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  // Sync OTP input with react-hook-form state
  const handleOTPChange = (value: string) => {
    setOtp(value);
    setValue("otp", value);
  };
  const resetTimer = () => {
    setTimeLeft(60);
  };

  // Timer for resend
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const onSubmit = async (data: VerifyEmail) => {
    const response = await verifyEmailAPI(data);
    if (response?.success) {
      toast.success(response?.message);
      queryClient.invalidateQueries({ queryKey: ["email"] });
      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 500);
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* OTP Input */}
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
        {errors.otp && (
          <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>
        )}
      </div>
      {/* Resend Timer */}
      <div className="text-center mb-4">
        {timeLeft > 0 ? (
          <p className="text-sm text-secondary font-semibold">
            Resend OTP in {Math.floor(timeLeft / 60)}:
            {String(timeLeft % 60).padStart(2, "0")}
          </p>
        ) : (
          <ResendOtp newEmail={newEmail} resetTimer={resetTimer} />
        )}
      </div>

      {/* Button */}
      <Button
        type="submit"
        className="w-full bg-primary text-white p-3 rounded-md font-medium"
        disabled={isSubmitting || otp.length < 5}
      >
        {isSubmitting ? <Loader /> : "Verify"}
      </Button>
    </form>
  );
}

export default VerifyEmailForm;
