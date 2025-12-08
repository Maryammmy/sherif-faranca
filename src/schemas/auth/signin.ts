import { phoneUtil } from "@/src/lib/utils";
import { z } from "zod";

export const signinWithEmailSchema = z.object({
  email: z
    .string()
    .min(1, { message: "email.errors.required" })
    .email({ message: "email.errors.invalid" }),
  password: z.string().min(1, { message: "password.errors.required" }),
});
export const signinWithNumberSchema = z
  .object({
    phoneNumber: z
      .string()
      .nonempty({ message: "phoneNumber.errors.required" }),
    countryCode: z.string().nonempty({ message: "Country code is required" }),
    password: z.string().min(1, { message: "password.errors.required" }),
  })
  .superRefine((data, ctx) => {
    const { phoneNumber, countryCode } = data;

    // الرقم الدولي كامل مع +
    const fullNumber = `+${countryCode}${phoneNumber}`;

    try {
      const number = phoneUtil.parse(fullNumber); // parse بدون country ISO
      if (!phoneUtil.isValidNumber(number)) {
        ctx.addIssue({
          code: "custom",
          path: ["phoneNumber"],
          message: "phoneNumber.errors.invalid",
        });
      }
    } catch {
      ctx.addIssue({
        code: "custom",
        path: ["phoneNumber"],
        message: "phoneNumber.errors.invalid",
      });
    }
  });

export type SigninWithEmail = z.infer<typeof signinWithEmailSchema>;
export type SigninWithNumber = z.infer<typeof signinWithNumberSchema>;
