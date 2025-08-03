import { z } from "zod";

export const createAccountSchema = z
  .object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    firstName: z
      .string()
      .min(3, { message: "min length 3 and max is 50" })
      .max(50, { message: "min length 3 and max is 50" })
      .nonempty({ message: "First name is required" }),
    lastName: z.string().nonempty({ message: "Last name is required" }),
    birthDate: z
      .string()
      .nonempty({ message: "Birth date is required" })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      }),

    phoneNumber: z
      .string()
      .regex(/^\d+$/, { message: "Phone number must contain only digits" })
      .min(9, { message: "Phone number must be at least 9 digits" })
      .max(15, { message: "Phone number can't be more than 15 digits" })
      .nonempty({ message: "Phone number is required" }),
    countryCode: z.string().nonempty({ message: "Country code is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .nonempty({ message: "Password is required" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });
