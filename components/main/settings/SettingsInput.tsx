import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import PasswordInput from "@/components/ui/PasswordInput";
import { IInputSettings } from "@/interfaces/main/settings";
import { ReactNode } from "react";

interface IProps {
  input: IInputSettings;
  icon?: ReactNode;
  withWrapper?: boolean;
  wrapperClassName?: string;
}

function SettingsInput({
  input,
  icon,
  withWrapper = false,
  wrapperClassName = "flex items-center border rounded-md px-3 py-1 gap-2",
}: IProps) {
  const { id, label, name, placeholder, type, labelClassname, inputClassname } =
    input;

  const inputProps = {
    id,
    name,
    placeholder,
    className: inputClassname,
  };

  const renderInput = () => {
    if (type === "password") return <PasswordInput {...inputProps} />;
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
