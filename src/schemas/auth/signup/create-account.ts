import { isAtLeast13, phoneUtil } from "@/src/lib/utils";
import { z } from "zod";

export const createAccountWithEmailSchema = z
  .object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    firstName: z
      .string()
      .nonempty({ message: "First name is required" })
      .min(3, { message: "min length 3 and max is 50" })
      .max(50, { message: "min length 3 and max is 50" }),
    lastName: z
      .string()
      .nonempty({ message: "Last name is required" })
      .min(3, { message: "min length 3 and max is 50" })
      .max(50, { message: "min length 3 and max is 50" }),
    birthDate: z
      .string()
      .nonempty("Birth date is required")
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format")
      .refine((val) => isAtLeast13(val), {
        message: "You must be at least 13 years old",
      }),
    phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
    countryCode: z.string().nonempty({ message: "Country code is required" }),
    password: z
      .string()
      .nonempty({ message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .max(50, { message: "Password must be at most 50 characters" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
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
          message: "Phone number is invalid",
        });
      }
    } catch {
      ctx.addIssue({
        code: "custom",
        path: ["phoneNumber"],
        message: "Phone number is invalid",
      });
    }
  });
export const createAccountWithNumberSchema = z
  .object({
    firstName: z
      .string()
      .nonempty({ message: "First name is required" })
      .min(3, { message: "min length 3 and max is 50" })
      .max(50, { message: "min length 3 and max is 50" }),
    lastName: z
      .string()
      .nonempty({ message: "Last name is required" })
      .min(3, { message: "min length 3 and max is 50" })
      .max(50, { message: "min length 3 and max is 50" }),
    birthDate: z
      .string()
      .nonempty("Birth date is required")
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format")
      .refine((val) => isAtLeast13(val), {
        message: "You must be at least 13 years old",
      }),
    phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
    countryCode: z.string().nonempty({ message: "Country code is required" }),
    password: z
      .string()
      .nonempty({ message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
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
          message: "Phone number is invalid",
        });
      }
    } catch {
      ctx.addIssue({
        code: "custom",
        path: ["phoneNumber"],
        message: "Phone number is invalid",
      });
    }
  });
export type SignupWithEmail = z.infer<typeof createAccountWithEmailSchema>;
export type SignupWithNumber = z.infer<typeof createAccountWithNumberSchema>;
