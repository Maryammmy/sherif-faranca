import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import PasswordInput from "@/components/ui/PasswordInput";
import { IInputSettings } from "@/interfaces/main/settings";
import { ReactNode } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface IProps<T extends FieldValues> {
  input: IInputSettings;
  icon?: ReactNode;
  withWrapper?: boolean;
  wrapperClassName?: string;
  register?: UseFormRegister<T>;
}

function SettingsInput<T extends FieldValues>({
  input,
  icon,
  withWrapper = false,
  wrapperClassName = "flex items-center border rounded-md px-3 py-1 gap-2",
  register,
}: IProps<T>) {
  const {
    id,
    label,
    name,
    placeholder,
    type,
    labelClassname,
    inputClassname,
    readonly,
    disabled,
  } = input;

  const inputProps = {
    id,
    type,
    name,
    placeholder,
    className: inputClassname,
    readonly,
    disabled,
    ...(register ? register(name as Path<T>) : {}),
  };

  const renderInput = () => {
    if (type === "password")
      return (
        <div className="p-3 border border-gray-600 rounded-md w-full">
          <PasswordInput {...inputProps} />
        </div>
      );

    if (withWrapper) {
      return (
        <div className={wrapperClassName}>
          {icon && icon}
          <Input {...inputProps} />
        </div>
      );
    }

    return <Input {...inputProps} />;
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className={labelClassname}>
        {label}
      </Label>
      {renderInput()}
    </div>
  );
}

export default SettingsInput;
