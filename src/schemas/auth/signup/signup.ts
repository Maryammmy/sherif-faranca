import { phoneUtil } from "@/src/lib/utils";
import { z } from "zod";

export const signupWithEmailSchema = z.object({
  email: z
    .string()
    .nonempty("email.errors.required")
    .email("email.errors.invalid"),
});
export const signupWithNumberSchema = z
  .object({
    mobile: z.string().nonempty({ message: "Phone number is required" }),
    countryCode: z.string().nonempty({ message: "Country code is required" }),
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
  });
