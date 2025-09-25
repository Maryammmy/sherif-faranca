import z from "zod";

export const changeEmailSchema = (currentEmail: string) =>
  z.object({
    newEmail: z
      .string()
      .nonempty("Email is required")
      .email("Please enter a valid email")
      .refine((val) => val !== currentEmail, {
        message: "New email cannot be the same as current email",
      }),
  });

export type ChangeEmail = z.infer<ReturnType<typeof changeEmailSchema>>;

export const verifyEmailSchema = z.object({
  otp: z
    .string()
    .nonempty("OTP is required")
    .regex(/^\d{5}$/, "OTP must be 5 digits (numbers only)"),
  newEmail: z.string().email("Please enter a valid email"),
});

export type VerifyEmail = z.infer<typeof verifyEmailSchema>;
