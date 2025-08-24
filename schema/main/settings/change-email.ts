import z from "zod";

export const changeEmailSchema = z.object({
  newEmail: z
    .string()
    .nonempty("Email is required")
    .email("Please enter a valid email"),
});

export type ChangeEmail = z.infer<typeof changeEmailSchema>;

export const verifyEmailSchema = z.object({
  otp: z
    .string()
    .nonempty("OTP is required")
    .regex(/^\d{5}$/, "OTP must be 5 digits (numbers only)"),
  newEmail: z.string().email("Please enter a valid email"),
});

export type VerifyEmail = z.infer<typeof verifyEmailSchema>;
