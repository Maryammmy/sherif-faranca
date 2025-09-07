import { INavItem } from "@/src/interfaces/main/sidebar";
import {
  Compass,
  FileText,
  Headphones,
  Home,
  Info,
  Settings,
  ShieldCheck,
  SquareActivity,
} from "lucide-react";

export const mainNavItems: INavItem[] = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/my-fit", icon: SquareActivity, label: "My Fit" },
  { href: "/discover", icon: Compass, label: "Discover" },
  { icon: Settings, label: "Settings" },
];

export const secondaryNavItems: INavItem[] = [
  { href: "/about-us", icon: Info, label: "About US" },
  { icon: Headphones, label: "Contact US" },
  { href: "/privacy-policy", icon: ShieldCheck, label: "Privacy Policy" },
  { href: "/terms", icon: FileText, label: "Terms & Conditions" },
];
