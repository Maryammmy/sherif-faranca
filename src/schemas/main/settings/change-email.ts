import z from "zod";

export const changeEmailSchema = (currentEmail: string) =>
  z.object({
    newEmail: z
      .string()
      .nonempty("newEmail.errors.required")
      .email("newEmail.errors.invalid")
      .refine((val) => val !== currentEmail, {
        message: "newEmail.errors.emailSameAsCurrent",
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
