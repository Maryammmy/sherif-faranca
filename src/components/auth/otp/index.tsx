"use client";
import OtpForm from "@/src/components/auth/otp/OtpForm";
import { useQueryParams } from "@/src/lib/utils";
import Image from "@/src/components/ui/Image";

function Otp() {
  const queryParams = useQueryParams();
  const { type, email, countryCode, number } = queryParams;
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      <div className="space-y-5 flex flex-col justify-center">
        <div className="space-y-3">
          <header>
            <h1 className="font-bold text-gray-800 text-3xl sm:text-4xl leading-11">
              ENTER VERIFICATION <span className="text-primary">CODE</span>
            </h1>
          </header>
          <p className="text-gray-400 font-medium max-w-sm">
            A Verification Code Has Been Sent To Your{" "}
            <span className="text-gray-400">
              {(type === "register-number" ||
                type === "forget-password-number") &&
              countryCode &&
              number ? (
                <>
                  Number <br />
                  <span className="text-primary break-all">
                    (+{countryCode}
                    {number})
                  </span>
                </>
              ) : (
                <>
                  Email <br />
                  <span className="text-primary break-all">({email})</span>
                </>
              )}
            </span>
          </p>
        </div>
        <div>
          <OtpForm queryParams={queryParams} />
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image src="/otp.png" alt="OTP illustration" width={500} height={500} />
      </div>
    </div>
  );
}

export default Otp;
