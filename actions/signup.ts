"use server";

import { signupEmailSchema } from "@/schema/auth/signup";
import { sendRegistrationAPI } from "@/services/otp";
import { SignupActionState } from "@/types/auth/signup";

export async function signupAction(
  prevState: SignupActionState,
  formData: FormData
): Promise<SignupActionState> {
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
    return { success: true, errors: {}, message: "OTP sent successfully" };
  } catch (error) {
    console.error("API error:", error);
    return { success: false, errors: {}, message: "Failed to send email" };
  }
}
