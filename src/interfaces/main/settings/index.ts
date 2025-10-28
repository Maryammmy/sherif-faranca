import { LucideIcon } from "lucide-react";

export interface ISetting {
  icon: LucideIcon;
  label: string;
  href?: string;
}
export interface IInputSettings {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  labelClassname: string;
  inputClassname: string;
  readOnly?: boolean;
  disabled?: boolean;
}
export interface IGender {
  label: string;
  value: boolean;
}
export interface ICountry {
  id: number;
  name: string;
  flagUrl: string;
}
export interface IFaq {
  answer: string;
  id: number;
  question: string;
  visibilityOrder: number;
}
