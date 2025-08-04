"use server";

import { IActionState } from "@/interfaces/form";
import { handleError } from "@/lib/utils";
import {
  createAccountEmailSchema,
  createAccountMobileSchema,
} from "@/schema/auth/signup";
import {
  SignupWithEmailAPI,
  SignupWithMobileAPI,
} from "@/services/auth/signup";

export async function createAccountAction(
  prevState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const type = formData.get("type") as string;

  try {
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

        const parsed = createAccountEmailSchema.safeParse(data);
        if (!parsed.success) {
          return {
            success: false,
            errors: parsed.error.flatten().fieldErrors,
            message: "",
          };
        }

        const response = await SignupWithEmailAPI(parsed.data);
        return {
          success: true,
          errors: {},
          message: response?.data?.message,
        };
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

        const parsed = createAccountMobileSchema.safeParse(data);
        if (!parsed.success) {
          return {
            success: false,
            errors: parsed.error.flatten().fieldErrors,
            message: "",
          };
        }

        const response = await SignupWithMobileAPI(parsed.data);
        return {
          success: true,
          errors: {},
          message: response?.data?.message,
        };
      }
      default:
        return {
          success: false,
          errors: { type: ["Invalid registration type"] },
          message: "",
        };
    }
  } catch (error) {
    return handleError(error);
  }
}
