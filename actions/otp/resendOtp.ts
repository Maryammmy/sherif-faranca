"use server";

import { IActionState } from "@/interfaces/form";
import { handleServerError } from "@/lib/utils";
import { sendRegistrationAPI } from "@/services/otp";
export async function resendOtpAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const type = formData.get("type") as string;

  try {
    switch (type) {
      case "register-email": {
        const email = formData.get("email") as string;
        if (!email) throw new Error("Email is required");

        const response = await sendRegistrationAPI({ email });
        return {
          success: true,
          message: response?.data?.message,
          errors: {},
        };
      }
      case "register-number": {
        const countryCode = formData.get("countryCode") as string;
        const mobile = formData.get("mobile") as string;
        if (!countryCode || !mobile)
          throw new Error("Country code and mobile are required");

        const response = await sendRegistrationAPI({ countryCode, mobile });
        return {
          success: true,
          message: response?.data?.message,
          errors: {},
        };
      }
      default:
        throw new Error("Invalid type");
    }
  } catch (error) {
    return handleServerError(error);
  }
}
