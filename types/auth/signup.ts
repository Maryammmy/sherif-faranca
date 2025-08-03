export type SignupEmailActionState = {
  success: boolean;
  errors: Record<string, string[]>;
  message: string;
  data?: {
    email: string;
  };
};
