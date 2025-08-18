import { IInputSettings } from "@/interfaces/main/settings";

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
    ...defaultStyles,
  },
  {
    id: "phoneNumber",
    name: "phoneNumber",
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
