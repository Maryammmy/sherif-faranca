"use server";

import { IActionState } from "@/interfaces/form";
import { handleError } from "@/lib/utils";
import { signupNumberSchema } from "@/schema/auth/signup";
import { sendRegistrationAPI } from "@/services/otp";

export async function sendRegistrationNumberAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const data = {
    mobile: formData.get("mobile") as string,
    countryCode: formData.get("countryCode") as string,
  };

  // ✅ Validate with Zod
  const parsed = signupNumberSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "",
    };
  }
  try {
    const response = await sendRegistrationAPI(parsed.data);
    return {
      success: true,
      errors: {},
      message: response?.data?.message,
      data: {
        countryCode: parsed?.data?.countryCode,
        mobile: parsed?.data?.mobile,
      },
    };
  } catch (error) {
    return handleError(error);
  }
}
