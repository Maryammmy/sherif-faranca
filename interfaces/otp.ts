export interface IVerifyRegistrationWithEmail {
  email: string;
  otp: string;
}
export interface IVerifyRegistrationWithNumber {
  countryCode: string;
  mobile: string;
  otp: string;
}
export interface IVerifyResetPasswordWithEmail {
  otp: string;
  email: string;
}
export interface IVerifyResetPasswordWithNumber {
  otp: string;
  mobile: string;
  countryCode: string;
}
