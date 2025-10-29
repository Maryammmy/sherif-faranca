import { INavItem } from "@/src/interfaces/main/home";
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
  { label: "class", icon: Play },
  { label: "challenges", icon: Grid },
  { label: "programs", icon: ClipboardList },
  { label: "water", icon: Droplet },
  { label: "steps", icon: Footprints },
  { label: "favorite", icon: Heart },
  { label: "calories", icon: Flame },
  { label: "sleep", icon: BedDouble },
  { label: "direction", icon: Clock },
];
