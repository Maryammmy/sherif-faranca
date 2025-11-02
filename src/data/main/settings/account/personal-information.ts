import { IGender, IInputSettings } from "@/src/interfaces/main/settings";

const defaultStyles = {
  labelClassname: "font-medium text-gray-400",
  inputClassname: "border-b",
};
export const personalInformationForm: IInputSettings[] = [
  {
    id: "FirstName",
    name: "FirstName",
    placeholder: "firstName.placeholder",
    type: "text",
    label: "firstName.name",
    ...defaultStyles,
  },
  {
    id: "LastName",
    name: "LastName",
    placeholder: "lastName.placeholder",
    type: "text",
    label: "lastName.name",
    ...defaultStyles,
  },
  {
    id: "email",
    name: "email",
    placeholder: "email.placeholder",
    type: "email",
    label: "email.name",
    readOnly: true,
    disabled: true,
    ...defaultStyles,
  },
];
export const genders: IGender[] = [
  { label: "gender.male", value: true },
  { label: "gender.female", value: false },
];
