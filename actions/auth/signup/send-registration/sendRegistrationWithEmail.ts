"use server";

import { IActionState } from "@/interfaces/form";
import { signupWithEmailSchema } from "@/schema/auth";
import { sendRegistrationAPI } from "@/services/auth";

export async function sendRegistrationWithEmailAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const data = {
    email: formData.get("email") as string,
  };

  // ✅ Validate with Zod
  const parsed = signupWithEmailSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "",
    };
  }
  return await sendRegistrationAPI(parsed.data);
}
