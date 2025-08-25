"use server";

import { IActionState } from "@/src/interfaces/form";
import { signupWithNumberSchema } from "@/src/schemas/auth";
import { sendRegistrationAPI } from "@/src/services/mutations/auth";

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
  const result = await sendRegistrationAPI(parsed.data);

  // Return the response with data included
  return {
    success: result.success,
    message: result.message,
    errors: result.errors,
    data: parsed.data as unknown as Record<string, string>, // Include the data from the API response
  };
}
