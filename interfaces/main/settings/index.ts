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
  readonly?: boolean;
  disabled?: boolean;
}
export interface IGender {
  label: string;
  value: boolean;
}
export interface IProfile {
  firstName: string;
  lastName: string;
  email?: string;
  birthDate?: string;
  country?: string;
  picture?: string;
  isMale?: boolean;
}
