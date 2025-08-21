// schemas/signinWithEmailSchema.js
import { z } from "zod";

export const signinWithEmailSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});
export const signinWithNumberSchema = z.object({
  phoneNumber: z
    .string()
    .nonempty({ message: "Phone number is required" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" })
    .min(9, { message: "Phone number must be at least 9 digits" })
    .max(15, { message: "Phone number can't be more than 15 digits" }),
  countryCode: z.string().nonempty({ message: "Country code is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type SigninWithEmail = z.infer<typeof signinWithEmailSchema>;
export type SigninWithNumber = z.infer<typeof signinWithNumberSchema>;
