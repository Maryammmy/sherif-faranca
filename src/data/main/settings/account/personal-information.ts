import { IGender, IInputSettings } from "@/src/interfaces/main/settings";

const defaultStyles = {
  labelClassname: "font-medium text-gray-400",
  inputClassname: "border-b",
};
export const personalInformationForm: IInputSettings[] = [
  {
    id: "FirstName",
    name: "FirstName",
    placeholder: "Mohmoud",
    type: "text",
    label: "First name",
    ...defaultStyles,
  },
  {
    id: "LastName",
    name: "LastName",
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
    readOnly: true,
    disabled: true,
    ...defaultStyles,
  },
];
export const genders: IGender[] = [
  { label: "Male", value: true },
  { label: "Female", value: false },
];
