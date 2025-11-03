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
  placeholder: "newEmail.placeholder",
  type: "email",
  label: "newEmail.name",
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
    placeholder: "password.currentPlaceholder",
    type: "password",
    label: "password.currentName",
    ...passwordDefaultStyles,
  },
  {
    id: "newPassword",
    name: "newPassword",
    placeholder: "newPassword.placeholder",
    type: "password",
    label: "newPassword.name",
    ...passwordDefaultStyles,
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    placeholder: "confirmPassword.placeholder",
    type: "password",
    label: "confirmPassword.name",
    ...passwordDefaultStyles,
  },
];
