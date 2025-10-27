import { isAtLeast13 } from "@/src/lib/utils";
import { z } from "zod";

export const profileSchema = z.object({
  FirstName: z
    .string()
    .nonempty("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long"),
  LastName: z
    .string()
    .nonempty("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name is too long"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
  countryCode: z.string().nonempty({ message: "Country code is required" }),
  BirthDate: z
    .string()
    .nonempty("Birth date is required")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)")
    .refine((val) => isAtLeast13(val), {
      message: "You must be at least 13 years old",
    }),
  CountryId: z.string().optional(),
  NewPicture: z.string().url("Invalid image URL").optional(),
  isMale: z.boolean().refine((val) => val === true || val === false, {
    message: "Please select gender",
  }),
});

export type Profile = z.infer<typeof profileSchema>;
