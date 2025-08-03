"use server";

import { IActionState } from "@/interfaces/form";
import { handleError } from "@/lib/utils";
import { createAccountSchema } from "@/schema/auth/signup/createAccountSchema";
import { SignupWithEmailAPI } from "@/services/auth/signup";

export async function createAccountAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const data = {
    email: formData.get("email") as string,
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    birthDate: formData.get("birthDate") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    countryCode: formData.get("countryCode") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  // ✅ Validate on server with Yup/Zod
  const parsed = createAccountSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "",
    };
  }

  try {
    const response = await SignupWithEmailAPI(parsed.data);
    return {
      success: true,
      errors: {},
      message: response?.data?.message,
    };
  } catch (error) {
    return handleError(error);
  }
}
