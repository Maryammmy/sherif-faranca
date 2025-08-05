"use server";

import { IActionState } from "@/interfaces/form";
import { handleServerError } from "@/lib/utils";
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
    return handleServerError(error);
  }
}
