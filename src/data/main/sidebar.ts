import { INavItem } from "@/src/interfaces/main/sidebar";
import {
  Compass,
  Headphones,
  Home,
  Info,
  Settings,
  ShieldCheck,
  SquareActivity,
} from "lucide-react";

export const mainNavItems: INavItem[] = [
  { href: "/", icon: Home, label: "home" },
  { href: "/my-fit", icon: SquareActivity, label: "myFit" },
  { href: "/discover", icon: Compass, label: "discover" },
  { icon: Settings, label: "settings" },
];

export const secondaryNavItems: INavItem[] = [
  { href: "/about-us", icon: Info, label: "aboutUs" },
  { icon: Headphones, label: "contactUs" },
  { href: "/privacy-policy", icon: ShieldCheck, label: "privacyPolicy" },
];
