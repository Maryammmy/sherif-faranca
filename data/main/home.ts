import { INavItem } from "@/interfaces/main/home";
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
