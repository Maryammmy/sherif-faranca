import { z } from "zod";

export const signupEmailSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
});
export const signupNumberSchema = z.object({
  number: z.string().nonempty("phone number is required"),
});
