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
export interface IClassicClass {
  id: number;
  title: string;
}
export interface INavItem {
  icon: LucideIcon;
  label: string;
}
