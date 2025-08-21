"use server";

import { IActionState } from "@/interfaces/form";
import { sendRegistrationAPI, sendResetPasswordAPI } from "@/services/auth";
export async function resendOtpAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const type = formData.get("type") as string;

  switch (type) {
    case "register-email": {
      const email = formData.get("email") as string;
      if (!email) throw new Error("Email is required");

      return await sendRegistrationAPI({ email });
    }
    case "register-number": {
      const countryCode = formData.get("countryCode") as string;
      const mobile = formData.get("mobile") as string;
      if (!countryCode || !mobile)
        throw new Error("Country code and phone number are required");

      return await sendRegistrationAPI({ countryCode, mobile });
    }
    case "forget-password-email": {
      const email = formData.get("email") as string;
      if (!email) throw new Error("Email is required");

      return await sendResetPasswordAPI({ email });
    }
    case "forget-password-number": {
      const countryCode = formData.get("countryCode") as string;
      const mobile = formData.get("mobile") as string;
      if (!countryCode || !mobile)
        throw new Error("Country code and phone number are required");

      return await sendResetPasswordAPI({ countryCode, mobile });
    }
    default:
      throw new Error("Invalid type");
  }
}
