import { IInputSettings } from "@/interfaces/main/settings";

const defaultStyles = {
  labelClassname: "font-medium text-gray-400",
  inputClassname: "border-b",
};
export const personalInformationForm: IInputSettings[] = [
  {
    id: "name",
    name: "name",
    placeholder: "Mohmoud",
    type: "text",
    label: "Name",
    ...defaultStyles,
  },
  {
    id: "email",
    name: "email",
    placeholder: "Mohmoud@gmail.com",
    type: "email",
    label: "Email",
    ...defaultStyles,
  },
  {
    id: "last_name",
    name: "last_name",
    placeholder: "Ali",
    type: "text",
    label: "Last name",
    ...defaultStyles,
  },
  {
    id: "phone_number",
    name: "phone_number",
    placeholder: "011111223344",
    type: "text",
    label: "Phone number",
    ...defaultStyles,
  },
  {
    id: "birth_day",
    name: "birth_day",
    placeholder: "11-8-1998",
    type: "date",
    label: "Birthday",
    ...defaultStyles,
  },
];
