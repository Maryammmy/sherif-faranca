import z from "zod";

export const changePhoneSchema = (currentPhone?: string) =>
  z
    .object({
      phoneNumber: z
        .string()
        .nonempty({ message: "Phone number is required" })
        .regex(/^\d+$/, { message: "Phone number must contain only digits" })
        .min(9, { message: "Phone number must be at least 9 digits" })
        .max(15, { message: "Phone number can't be more than 15 digits" }),
      countryCode: z.string().nonempty({ message: "Country code is required" }),
    })
    .refine(
      (data) => `${data.countryCode}${data.phoneNumber}` !== currentPhone,
      {
        message: "New phone number cannot be the same as current phone number",
        path: ["phoneNumber"],
      }
    );

export type ChangePhone = z.infer<ReturnType<typeof changePhoneSchema>>;

export const verifyPhoneSchema = z.object({
  otp: z
    .string()
    .nonempty("OTP is required")
    .regex(/^\d{5}$/, "OTP must be 5 digits (numbers only)"),
  phoneNumber: z
    .string()
    .nonempty({ message: "Phone number is required" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" })
    .min(9, { message: "Phone number must be at least 9 digits" })
    .max(15, { message: "Phone number can't be more than 15 digits" }),
  countryCode: z.string().nonempty({ message: "Country code is required" }),
});

export type VerifyPhone = z.infer<typeof verifyPhoneSchema>;
