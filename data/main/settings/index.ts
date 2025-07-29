import { ISetting } from "@/interfaces/main/settings";
import {
  BadgeCheck,
  Bell,
  BookmarkCheck,
  Headphones,
  Languages,
  LockKeyhole,
  MailCheck,
  Settings,
  UserRound,
  UserRoundSearch,
} from "lucide-react";

export const account: ISetting[] = [
  { icon: UserRound, label: "personal information" },
  { icon: Settings, label: "account settings" },
  {
    icon: BookmarkCheck,
    label: "my workouts",
    href: "/settings/account/workouts",
  },
  { icon: BadgeCheck, label: "my goal" },
];
export const settings: ISetting[] = [
  { icon: Bell, label: "notification settings" },
  { icon: Languages, label: "language" },
  { icon: LockKeyhole, label: "change password" },
  { icon: MailCheck, label: "change email" },
];
export const reachOut: ISetting[] = [
  { icon: UserRoundSearch, label: "about us" },
  { icon: Headphones, label: "contact us" },
];
