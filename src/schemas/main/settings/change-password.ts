import z from "zod";

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, { message: "password.errors.required" }),
    newPassword: z
      .string()
      .nonempty({ message: "newPassword.errors.required" })
      .min(8, { message: "newPassword.errors.min" })
      .max(50, { message: "newPassword.errors.max" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "confirmPassword.errors.required" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "confirmPassword.errors.match",
  });
export type ChangePassword = z.infer<typeof changePasswordSchema>;
