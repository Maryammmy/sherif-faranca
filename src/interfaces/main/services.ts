import { ReactNode } from "react";

export interface IAboutUs {
  description: string;
  imageUrl: string;
  title: string;
  version: string;
}
export interface IContactUs {
  hotline: string;
  mail: string;
  countrycode: string;
  phoneNumber: string;
  facbookUrl: string;
  instegramUrl: string;
  tiktokUrl: string;
}
export interface IContactItem {
  label: string;
  value: string;
  icon: ReactNode;
  href: string;
  isSocial?: boolean;
}
