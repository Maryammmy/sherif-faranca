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
  { icon: UserRound, label: "settings.account.personalInformation" },
  {
    icon: BookmarkCheck,
    label: "settings.account.myWorkouts",
    href: "/settings/account/workouts?section=history&time=today",
  },
  { icon: BadgeCheck, label: "settings.account.myGoal" },
];
export const settings: ISetting[] = [
  { icon: Languages, label: "settings.settings.language" },
  { icon: LockKeyhole, label: "settings.settings.changePassword" },
  { icon: MailCheck, label: "settings.settings.changeEmail" },
  { icon: Phone, label: "settings.settings.changePhoneNumber" },
  { icon: TableOfContents, label: "settings.settings.faq" },
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
