import { isAtLeast13, phoneUtil } from "@/src/lib/utils";
import { z } from "zod";

export const createAccountWithEmailSchema = z
  .object({
    email: z
      .string()
      .nonempty("email.errors.required")
      .email("email.errors.invalid"),
    firstName: z
      .string()
      .nonempty({ message: "firstName.errors.required" })
      .min(3, { message: "firstName.errors.length" })
      .max(50, { message: "firstName.errors.length" }),
    lastName: z
      .string()
      .nonempty({ message: "lastName.errors.required" })
      .min(3, { message: "lastName.errors.length" })
      .max(50, { message: "lastName.errors.length" }),
    birthDate: z
      .string()
      .nonempty("birthDate.errors.required")
      .regex(/^\d{4}-\d{2}-\d{2}$/, "birthDate.errors.invalid")
      .refine((val) => isAtLeast13(val), {
        message: "birthDate.errors.atLastAge",
      }),
    phoneNumber: z
      .string()
      .nonempty({ message: "phoneNumber.errors.required" }),
    countryCode: z.string().nonempty({ message: "Country code is required" }),
    password: z
      .string()
      .nonempty({ message: "password.errors.required" })
      .min(8, { message: "password.errors.min" })
      .max(50, { message: "password.errors.max" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "confirmPassword.errors.required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "confirmPassword.errors.match",
  })
  .superRefine((data, ctx) => {
    const { phoneNumber, countryCode } = data;

    // الرقم الدولي كامل مع +
    const fullNumber = `+${countryCode}${phoneNumber}`;

    try {
      const number = phoneUtil.parse(fullNumber); // parse بدون country ISO
      if (!phoneUtil.isValidNumber(number)) {
        ctx.addIssue({
          code: "custom",
          path: ["phoneNumber"],
          message: "phoneNumber.errors.invalid",
        });
      }
    } catch {
      ctx.addIssue({
        code: "custom",
        path: ["phoneNumber"],
        message: "phoneNumber.errors.invalid",
      });
    }
  });
export const createAccountWithNumberSchema = z
  .object({
    firstName: z
      .string()
      .nonempty({ message: "firstName.errors.required" })
      .min(3, { message: "firstName.errors.length" })
      .max(50, { message: "firstName.errors.length" }),
    lastName: z
      .string()
      .nonempty({ message: "lastName.errors.required" })
      .min(3, { message: "lastName.errors.length" })
      .max(50, { message: "lastName.errors.length" }),
    birthDate: z
      .string()
      .nonempty("birthDate.errors.required")
      .regex(/^\d{4}-\d{2}-\d{2}$/, "birthDate.errors.invalid")
      .refine((val) => isAtLeast13(val), {
        message: "birthDate.errors.atLastAge",
      }),
    phoneNumber: z
      .string()
      .nonempty({ message: "phoneNumber.errors.required" }),
    countryCode: z.string().nonempty({ message: "Country code is required" }),
    password: z
      .string()
      .nonempty({ message: "password.errors.required" })
      .min(8, { message: "password.errors.min" })
      .max(50, { message: "password.errors.max" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "confirmPassword.errors.required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "confirmPassword.errors.match",
  })
  .superRefine((data, ctx) => {
    const { phoneNumber, countryCode } = data;

    // الرقم الدولي كامل مع +
    const fullNumber = `+${countryCode}${phoneNumber}`;

    try {
      const number = phoneUtil.parse(fullNumber); // parse بدون country ISO
      if (!phoneUtil.isValidNumber(number)) {
        ctx.addIssue({
          code: "custom",
          path: ["phoneNumber"],
          message: "phoneNumber.errors.invalid",
        });
      }
    } catch {
      ctx.addIssue({
        code: "custom",
        path: ["phoneNumber"],
        message: "phoneNumber.errors.invalid",
      });
    }
  });
export type SignupWithEmail = z.infer<typeof createAccountWithEmailSchema>;
export type SignupWithNumber = z.infer<typeof createAccountWithNumberSchema>;
