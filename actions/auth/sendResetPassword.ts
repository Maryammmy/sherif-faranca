"use server";

import { IActionState } from "@/interfaces/form";
import { handleServerError } from "@/lib/utils";
import { resetPasswordWithEmailSchema } from "@/schema/auth";
import { sendResetPasswordAPI } from "@/services/auth";

export async function sendResetPasswordAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const data = {
    email: formData.get("email") as string,
  };

  // ✅ Validate with Zod
  const parsed = resetPasswordWithEmailSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "",
    };
  }
  try {
    const response = await sendResetPasswordAPI(parsed.data);
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
