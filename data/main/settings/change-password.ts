import { IInputSettings } from "@/interfaces/main/settings";

const defaultStyles = {
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
    ...defaultStyles,
  },
  {
    id: "newPassword",
    name: "newPassword",
    placeholder: "Enter new password",
    type: "password",
    label: "New password",
    ...defaultStyles,
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    placeholder: "Enter confirm password",
    type: "password",
    label: "Confirm password",
    ...defaultStyles,
  },
];
