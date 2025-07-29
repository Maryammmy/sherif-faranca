import { IClassicClass, INavItem } from "@/interfaces/main/home";
import {
  Play,
  Grid,
  ClipboardList,
  Droplet,
  Footprints,
  Heart,
  Flame,
  BedDouble,
  Clock,
} from "lucide-react";

export const classicClass: IClassicClass[] = [
  { id: 1, title: "Abs" },
  { id: 2, title: "Arms" },
  { id: 3, title: "Chest" },
  { id: 4, title: "Legs" },
  { id: 5, title: "Shoulder & Back" },
];
export const navItems: INavItem[] = [
  { label: "Class", icon: Play },
  { label: "Challenges", icon: Grid },
  { label: "Programs", icon: ClipboardList },
  { label: "Water", icon: Droplet },
  { label: "Steps", icon: Footprints },
  { label: "Favorite", icon: Heart },
  { label: "Calories", icon: Flame },
  { label: "Sleep", icon: BedDouble },
  { label: "Direction", icon: Clock },
  { label: "Favorite", icon: Heart },
  { label: "Calories", icon: Flame },
];
