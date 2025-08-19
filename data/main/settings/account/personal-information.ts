import { IGender, IInputSettings } from "@/interfaces/main/settings";

const defaultStyles = {
  labelClassname: "font-medium text-gray-400",
  inputClassname: "border-b",
};
export const personalInformationForm: IInputSettings[] = [
  {
    id: "firstName",
    name: "firstName",
    placeholder: "Mohmoud",
    type: "text",
    label: "First name",
    ...defaultStyles,
  },
  {
    id: "lastName",
    name: "lastName",
    placeholder: "Ali",
    type: "text",
    label: "Last name",
    ...defaultStyles,
  },
  {
    id: "email",
    name: "email",
    placeholder: "Mohmoud@gmail.com",
    type: "email",
    label: "Email",
    readonly: true,
    disabled: true,
    ...defaultStyles,
  },
];
export const genders: IGender[] = [
  { label: "Male", value: true },
  { label: "Female", value: false },
];
