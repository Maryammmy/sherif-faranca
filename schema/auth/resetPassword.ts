import { z } from "zod";
export const sendResetPasswordSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("email"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    countryCode: z.never().optional(),
    mobile: z.never().optional(),
  }),
  z.object({
    type: z.literal("number"),
    countryCode: z.string().nonempty("Country code is required"),
    mobile: z.string().nonempty("Phone number is required"),
    email: z.never().optional(),
  }),
]);
export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .nonempty({ message: "Password is required" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm password is required" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });
export type ResetPassword = z.infer<typeof resetPasswordSchema>;
