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
  imageUrl: string;
  levelName: string;
  title: string;
  totalCalories: number;
  isFavorite: boolean;
  isProgram: boolean;
}
export interface IClassicClass {
  focusAreaId: number;
  focusAreaName: string;
  videos: IClass[];
}
export interface IClass {
  videoId: number;
  title: string;
  focusAreas: [];
  level: string;
  duration: string;
  calories: string;
  imageUrl: string;
  videoUrl: string;
}
export interface IMerchantBanner {
  id: number;
  imageUrl: string;
  url: string;
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
export interface IFoucsArea {
  focusAreaId: number;
  focusAreaName: string;
}
