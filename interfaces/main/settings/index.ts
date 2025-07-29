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
}
