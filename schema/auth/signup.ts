import { z } from "zod";

export const signupEmailSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
});

// Type inference
export type SignupEmail = z.infer<typeof signupEmailSchema>;
