import { ReactNode } from "react";

export interface IRing {
  value: number;
  color: string;
  strokeWidth: number;
  scale: number;
}

export interface IHabit {
  title: string;
  value: string;
  unit: string;
  goal: string;
  icon: ReactNode;
}
