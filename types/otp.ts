export type SendRegistration =
  | { email: string; mobile?: never; countryCode?: never }
  | { email?: never; mobile: string; countryCode: string };
