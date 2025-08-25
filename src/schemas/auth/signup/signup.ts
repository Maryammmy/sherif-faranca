import { z } from "zod";

export const signupWithEmailSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
});
export const signupWithNumberSchema = z.object({
  mobile: z
    .string()
    .regex(/^\d+$/, { message: "Phone number must contain only digits" })
    .min(9, { message: "Phone number must be at least 9 digits" })
    .max(15, { message: "Phone number can't be more than 15 digits" })
    .nonempty({ message: "Phone number is required" }),
  countryCode: z.string().nonempty({ message: "Country code is required" }),
});
