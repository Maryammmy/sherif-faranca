import { LucideIcon } from "lucide-react";

export interface IRecentWatched {
  categoryName: string;
  id: number;
  imageUrl: string;
  levelName: string;
  time: string;
  title: string;
  videoType: string;
  watchProgressPercentage: number;
}
export interface IRecommendedForYou {
  classesCount: number;
  id: number;
  imageUrl: number;
  levelName: string;
  title: string;
  totalCalories: number;
}
export interface IClassicClass {
  focusAreaId: number;
  focusAreaName: string;
  programs: IClass[];
}
export interface IClass {
  focusArea: string;
  imageUrl: string;
  level: string;
  programDayId: number;
  title: string;
  totalCalories: number;
  totalDuration: number;
}
export interface IMerchantBanner {
  description: string;
  imageUrl: string;
  title: string;
}
export interface IDiscoverProgram {
  classesCount: number;
  id: number;
  imageUrl: string;
  levelName: string;
  title: string;
  totalCalories: number;
}
export interface INavItem {
  icon: LucideIcon;
  label: string;
}
