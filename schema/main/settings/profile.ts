import { isAtLeast13 } from "@/lib/utils";
import { z } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .nonempty("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long"),

  lastName: z
    .string()
    .nonempty("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name is too long"),

  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),

  phoneNumber: z
    .string()
    .nonempty({ message: "Phone number is required" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" })
    .min(9, { message: "Phone number must be at least 9 digits" })
    .max(15, { message: "Phone number can't be more than 15 digits" }),
  countryCode: z.string().min(1, "Country code is required"),
  birthDate: z
    .string()
    .nonempty("Birthday is required")
    .refine((val) => isAtLeast13(val), {
      message: "You must be at least 13 years old",
    }),

  country: z.string().optional(),

  picture: z.string().url("Invalid picture URL").optional(),
  isMale: z.boolean().refine((val) => val === true || val === false, {
    message: "Gender is required",
  }),
});

export type Profile = z.infer<typeof profileSchema>;
