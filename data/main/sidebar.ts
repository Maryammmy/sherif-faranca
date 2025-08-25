import { INavItem } from "@/interfaces/main/sidebar";
import {
  Compass,
  FileText,
  HeartPulse,
  Home,
  Info,
  Settings,
  ShieldCheck,
  User,
} from "lucide-react";

export const mainNavItems: INavItem[] = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/personal", icon: User, label: "Personal" },
  { href: "/my-fit", icon: HeartPulse, label: "My Fit" },
  { href: "/discover", icon: Compass, label: "Discover" },
  { icon: Settings, label: "Settings" },
];

export const secondaryNavItems: INavItem[] = [
  { href: "/about-us", icon: Info, label: "About US" },
  { href: "/privacy-policy", icon: ShieldCheck, label: "Privacy Policy" },
  { href: "/terms", icon: FileText, label: "Terms & Conditions" },
];
