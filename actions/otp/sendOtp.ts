"use server";

import { IActionState } from "@/interfaces/form";
import { handleError } from "@/lib/utils";
import { sendRegistrationAPI } from "@/services/otp";

export async function resendOtpAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const email = formData.get("email") as string;
  const type = formData.get("type") as string;
  try {
    switch (type) {
      case "register-email":
        if (!email) throw new Error("Email required");
        const response = await sendRegistrationAPI({ email });
        return {
          success: true,
          message: response?.data?.message,
          errors: {},
        };

      default:
        throw new Error("Invalid type");
    }
  } catch (error) {
    return handleError(error);
  }
}
