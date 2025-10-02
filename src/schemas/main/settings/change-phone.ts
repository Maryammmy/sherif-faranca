import { phoneUtil } from "@/src/lib/utils";
import { z } from "zod";

export const changePhoneSchema = (currentPhone?: string) =>
  z
    .object({
      phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
      countryCode: z.string().nonempty({ message: "Country code is required" }),
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

      // الرقم مش نفس الرقم القديم
      if (`${countryCode}${phoneNumber}` === currentPhone) {
        ctx.addIssue({
          code: "custom",
          path: ["phoneNumber"],
          message:
            "New phone number cannot be the same as current phone number",
        });
      }
    });

// type اللي هيتبعت للـ backend
export type ChangePhone = z.infer<ReturnType<typeof changePhoneSchema>>;

export const verifyPhoneSchema = z
  .object({
    otp: z
      .string()
      .nonempty("OTP is required")
      .regex(/^\d{5}$/, "OTP must be 5 digits (numbers only)"),
    phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
    countryCode: z.string().nonempty({ message: "Country code is required" }),
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

export type VerifyPhone = z.infer<typeof verifyPhoneSchema>;
