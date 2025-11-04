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
    .nonempty("otp.errors.required")
    .regex(/^\d{5}$/, "otp.errors.invalid"),
  newEmail: z.string().email("email.errors.invalid"),
});

export type VerifyEmail = z.infer<typeof verifyEmailSchema>;
