import { ILanguage } from "@/src/interfaces/auth";
import { ISocialButton } from "@/src/types/auth";

export const languages: ILanguage[] = [
  {
    code: "en",
    label: "English",
    flag: "/us-flag.svg",
  },
  {
    code: "fr",
    label: "French",
    flag: "/fr-flag.svg",
  },
  {
    code: "ar",
    label: "العربية",
    flag: "/ar-flag.svg",
  },
];

export const socialButtons: ISocialButton[] = [
  {
    icon: "/google.svg",
    alt: "Google",
    label: "Continue with Google",
  },
  {
    icon: "/face.svg",
    alt: "Facebook",
    label: "Continue with Facebook",
  },
];
