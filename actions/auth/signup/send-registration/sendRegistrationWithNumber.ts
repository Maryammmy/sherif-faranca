"use server";

import { IActionState } from "@/interfaces/form";
import { signupWithNumberSchema } from "@/schema/auth";
import { sendRegistrationAPI } from "@/services/auth";

export async function sendRegistrationWithNumberAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const data = {
    mobile: formData.get("mobile") as string,
    countryCode: formData.get("countryCode") as string,
  };

  // ✅ Validate with Zod
  const parsed = signupWithNumberSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "",
    };
  }
  return await sendRegistrationAPI(parsed.data);
}
