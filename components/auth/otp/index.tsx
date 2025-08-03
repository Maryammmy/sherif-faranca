"use client";
import OtpForm from "@/components/auth/otp/OtpForm";
import { useQueryParams } from "@/lib/utils";
import Image from "next/image";

function Otp() {
  const queryParams = useQueryParams();
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
            A Verification With An Activation Code To Your Email{" "}
            <span className="text-primary">{queryParams?.email}</span>
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
