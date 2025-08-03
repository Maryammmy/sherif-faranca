"use server";

import { IActionState } from "@/interfaces/form";
import { handleError } from "@/lib/utils";
import { verifyRegistrationEmailAPI } from "@/services/otp";

export async function verifyOtpAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const otp = formData.get("otp") as string;
  const email = formData.get("email") as string;
  const type = formData.get("type") as string;
  try {
    switch (type) {
      case "register-email":
        if (!email) throw new Error("Email required");
        const response = await verifyRegistrationEmailAPI({ email, otp });
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
