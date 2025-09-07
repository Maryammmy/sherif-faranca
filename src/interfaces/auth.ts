export interface ILanguage {
  code: string;
  label: string;
  flag: string;
}
export interface ISigninWithEmail {
  email: string;
  password: string;
}
export interface ISigninWithNumber {
  phoneNumber: string;
  countryCode: string;
  password: string;
}
