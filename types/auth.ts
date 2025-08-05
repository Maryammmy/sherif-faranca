export type SendRegistration =
  | { email: string; mobile?: never; countryCode?: never }
  | { email?: never; mobile: string; countryCode: string };
export type SendResetPassword =
  | { email: string; mobile?: never; countryCode?: never }
  | { email?: never; mobile: string; countryCode: string };
export type ResetPassword =
  | {
      email: string;
      mobile?: never;
      countryCode?: never;
      newPassword: string;
      confirmPassword: string;
    }
  | {
      email?: never;
      mobile: string;
      countryCode: string;
      newPassword: string;
      confirmPassword: string;
    };
export type ISocialButton = {
  icon: string;
  alt: "Google" | "Facebook";
  label: string;
};
