"use server";

import { IActionState } from "@/src/interfaces/form";
import { createAccountWithEmailSchema, createAccountWithNumberSchema } from "@/src/schemas/auth/signup/create-account";
import { signupWithEmailAPI, signupWithNumberAPI } from "@/src/services/mutations/auth";

export async function createAccountAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const type = formData.get("type") as string;

  switch (type) {
    case "register-email": {
      const data = {
        email: formData.get("email") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        countryCode: formData.get("countryCode") as string,
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        birthDate: formData.get("birthDate") as string,
        password: formData.get("password") as string,
        confirmPassword: formData.get("confirmPassword") as string,
      };

      const parsed = createAccountWithEmailSchema.safeParse(data);
      if (!parsed.success) {
        return {
          success: false,
          errors: parsed.error.flatten().fieldErrors,
          message: "",
        };
      }

      return await signupWithEmailAPI(parsed.data); // مباشرة ترجع response
    }

    case "register-number": {
      const data = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        birthDate: formData.get("birthDate") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        countryCode: formData.get("countryCode") as string,
        password: formData.get("password") as string,
        confirmPassword: formData.get("confirmPassword") as string,
      };

      const parsed = createAccountWithNumberSchema.safeParse(data);
      if (!parsed.success) {
        return {
          success: false,
          errors: parsed.error.flatten().fieldErrors,
          message: "",
        };
      }
      return await signupWithNumberAPI(parsed.data);
    }

    default:
      return {
        success: false,
        errors: { type: ["Invalid registration type"] },
        message: "",
      };
  }
}
