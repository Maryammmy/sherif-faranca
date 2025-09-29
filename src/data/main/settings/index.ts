import { IInputSettings, ISetting } from "@/src/interfaces/main/settings";
import {
  BadgeCheck,
  BookmarkCheck,
  Languages,
  LockKeyhole,
  MailCheck,
  Phone,
  TableOfContents,
  UserRound,
} from "lucide-react";

export const account: ISetting[] = [
  { icon: UserRound, label: "personal information" },
  {
    icon: BookmarkCheck,
    label: "my workouts",
    href: "/settings/account/workouts?section=history&time=today",
  },
  { icon: BadgeCheck, label: "my goal" },
];
export const settings: ISetting[] = [
  { icon: Languages, label: "language" },
  { icon: LockKeyhole, label: "change password" },
  { icon: MailCheck, label: "change email" },
  { icon: Phone, label: "change phone number" },
  { icon: TableOfContents, label: "FAQ" },
];
export const email: IInputSettings = {
  id: "newEmail",
  name: "newEmail",
  placeholder: "Enter new email",
  type: "email",
  label: "New email",
  inputClassname: "w-full",
  labelClassname: "text-gray-600 font-medium",
};
const passwordDefaultStyles = {
  labelClassname: "font-medium text-gray-600",
  inputClassname: "w-full",
};
export const changePasswordForm: IInputSettings[] = [
  {
    id: "currentPassword",
    name: "currentPassword",
    placeholder: "Enter current password",
    type: "password",
    label: "Password",
    ...passwordDefaultStyles,
  },
  {
    id: "newPassword",
    name: "newPassword",
    placeholder: "Enter new password",
    type: "password",
    label: "New password",
    ...passwordDefaultStyles,
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    placeholder: "Enter confirm password",
    type: "password",
    label: "Confirm password",
    ...passwordDefaultStyles,
  },
];
