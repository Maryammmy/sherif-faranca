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
export interface ICalories {
  dailyCalories: IDailyCalories[];
  totalWeekCalories: number;
}
export interface IDailyCalories {
  calories: number;
  date: string;
}
export interface IAchievement {
  progress: number;
  average: number;
}
export interface IFav {
  id: number;
  imageUrl: string;
  isFavorite: boolean;
  isProgram: boolean;
  title: string;
}
export interface IHistory {
  calories: number;
  durationMinutes: number;
  id: number;
  imageUrl: string;
  title: string;
  watchedDate: string;
}
export interface IHistories {
  daily: IHistory[];
  monthly: IHistory[];
  weekly: IHistory[];
}
export interface IHealthHabit {
  goal: number;
  progress: number;
  title: string;
}
export interface IMyFit {
  achievement: IAchievement;
  favoriteItems: IFav[];
  getWatchedHistoryAsync: IHistories;
  healthHabits: IHealthHabit[];
}
