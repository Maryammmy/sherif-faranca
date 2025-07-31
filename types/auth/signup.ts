export type SignupActionState = {
  success: boolean;
  errors: Record<string, string[]>;
  message?: string;
};
