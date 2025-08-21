"use server";

import { IActionState } from "@/interfaces/form";
import { sendResetPasswordSchema } from "@/schema/auth";
import { sendResetPasswordAPI } from "@/services/auth";
import type { SendResetPassword } from "@/types/auth";

export async function sendResetPasswordAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const type = formData.get("type") as string;

  const rawData =
    type === "number"
      ? {
          type: "number",
          countryCode: formData.get("countryCode") as string,
          mobile: formData.get("mobile") as string,
        }
      : {
          type: "email",
          email: formData.get("email") as string,
        };

  // ✅ Validate with Zod
  const parsed = sendResetPasswordSchema.safeParse(rawData);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "",
    };
  }

  let payload: SendResetPassword;

  if (parsed.data.type === "number") {
    payload = {
      countryCode: parsed.data.countryCode,
      mobile: parsed.data.mobile,
    };
  } else {
    payload = { email: parsed.data.email };
  }
  return await sendResetPasswordAPI(payload);
}
