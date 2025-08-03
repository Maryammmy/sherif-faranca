"use server";

import { IActionState } from "@/interfaces/form";
import { handleError } from "@/lib/utils";
import { signupEmailSchema } from "@/schema/auth/signup";
import { sendRegistrationAPI } from "@/services/otp";

export async function sendRegistrationEmailAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const data = {
    email: formData.get("email") as string,
  };

  // ✅ Validate with Zod
  const parsed = signupEmailSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "",
    };
  }
  try {
    const response = await sendRegistrationAPI(parsed.data);
    console.log("API response:", response?.data?.message);
    return {
      success: true,
      errors: {},
      message: response?.data?.message,
      data: { email: parsed.data.email },
    };
  } catch (error) {
    return handleError(error);
  }
}
