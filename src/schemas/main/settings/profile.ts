import { isAtLeast13 } from "@/src/lib/utils";
import { z } from "zod";

export const profileSchema = z.object({
  FirstName: z
    .string()
    .nonempty({ message: "firstName.errors.required" })
    .min(3, { message: "firstName.errors.length" })
    .max(50, { message: "firstName.errors.length" }),
  LastName: z
    .string()
    .nonempty({ message: "lastName.errors.required" })
    .min(3, { message: "lastName.errors.length" })
    .max(50, { message: "lastName.errors.length" }),
  email: z
    .string()
    .nonempty("email.errors.required")
    .email("email.errors.invalid"),
  phoneNumber: z.string().nonempty({ message: "phoneNumber.errors.required" }),
  countryCode: z.string().nonempty({ message: "Country code is required" }),
  BirthDate: z
    .string()
    .nonempty("birthDate.errors.required")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "birthDate.errors.invalid")
    .refine((val) => isAtLeast13(val), {
      message: "birthDate.errors.atLastAge",
    }),
  CountryId: z.string().optional(),
  NewPicture: z.string().url("Invalid image URL").optional(),
  isMale: z.boolean().refine((val) => val === true || val === false, {
    message: "gender.errors.required",
  }),
});

export type Profile = z.infer<typeof profileSchema>;
