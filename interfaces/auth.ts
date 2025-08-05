export interface ILanguage {
  code: string;
  label: string;
  flag: string;
}
export interface ISocialButton {
  icon: string;
  alt: string;
  label: string;
}
export interface ISignupWithEmail {
  birthDate: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface ISignupWithNumber {
  birthDate: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}
export interface ISigninWithEmail {
  email: string;
  password: string;
}
