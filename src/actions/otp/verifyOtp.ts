"use server";

import { IActionState } from "@/src/interfaces/form";
import {
  verifyRegistrationWithEmailAPI,
  verifyRegistrationWithNumberAPI,
  verifyResetPasswordWithEmailAPI,
  verifyResetPasswordWithNumberAPI,
} from "@/src/services/mutations/otp";

export async function verifyOtpAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const otp = formData.get("otp") as string;
  const type = formData.get("type") as string;

  if (!otp) throw new Error("OTP is required");

  switch (type) {
    case "register-email": {
      const email = formData.get("email") as string;
      if (!email) throw new Error("Email is required");

      return await verifyRegistrationWithEmailAPI({ email, otp });
    }

    case "register-number": {
      const countryCode = formData.get("countryCode") as string;
      const mobile = formData.get("mobile") as string;
      if (!countryCode || !mobile)
        throw new Error("Country code and phone number are required");

      return await verifyRegistrationWithNumberAPI({
        countryCode,
        mobile,
        otp,
      });
    }
    case "forget-password-email": {
      const email = formData.get("email") as string;
      if (!email) throw new Error("Email is required");

      return await verifyResetPasswordWithEmailAPI({ email, otp });
    }
    case "forget-password-number": {
      const countryCode = formData.get("countryCode") as string;
      const mobile = formData.get("mobile") as string;
      if (!countryCode || !mobile)
        throw new Error("Country code and phone number are required");

      return await verifyResetPasswordWithNumberAPI({
        countryCode,
        mobile,
        otp,
      });
    }
    default:
      throw new Error("Invalid type");
  }
}
