import { IInputSettings } from "@/interfaces/main/settings";

const defaultStyles = {
  labelClassname: "font-medium text-gray-600",
  inputClassname: "w-full",
};
export const changePasswordForm: IInputSettings[] = [
  {
    id: "password",
    name: "password",
    placeholder: "Enter current password",
    type: "password",
    label: "Password",
    ...defaultStyles,
  },
  {
    id: "new_password",
    name: "new_password",
    placeholder: "Enter new password",
    type: "password",
    label: "New password",
    ...defaultStyles,
  },
  {
    id: "confirm_password",
    name: "confirm_password",
    placeholder: "Enter confirm password",
    type: "password",
    label: "Confirm password",
    ...defaultStyles,
  },
];
