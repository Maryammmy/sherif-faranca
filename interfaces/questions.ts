import { LucideIcon } from "lucide-react";

export interface IQuestion {
  src: string;
  label: string;
}
export interface IColoredText {
  firstColoredText: string;
  lastColoredText: string;
}
export interface ITime {
  icon: LucideIcon;
  label: string;
}
export interface IWorkoutFrequency {
  src: string;
  label: string;
  value: number;
}
export interface IFitnessLevel {
  src: string;
  title: string;
  description: string;
}
