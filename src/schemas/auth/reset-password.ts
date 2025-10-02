import { phoneUtil } from "@/src/lib/utils";
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
  z
    .object({
      type: z.literal("number"),
      mobile: z.string().nonempty({ message: "Phone number is required" }),
      countryCode: z.string().nonempty({ message: "Country code is required" }),
      email: z.never().optional(),
    })
    .superRefine((data, ctx) => {
      const { mobile, countryCode } = data;

      // الرقم الدولي كامل مع +
      const fullNumber = `+${countryCode}${mobile}`;

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
    }),
]);
export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .nonempty({ message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .max(50, { message: "Password must be at most 50 characters" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm password is required" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });
export type ResetPassword = z.infer<typeof resetPasswordSchema>;
