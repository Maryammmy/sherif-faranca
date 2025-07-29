import Button from "@/components/ui/Button";
import { changePasswordForm } from "@/data/main/settings/change-password";
import SettingsInput from "../SettingsInput";

function ChangePasswordForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
      {changePasswordForm.map((input) => (
        <SettingsInput key={input.id} input={input} />
      ))}
      <Button className="bg-primary py-3 font-medium text-white rounded-md">
        Change password
      </Button>
    </form>
  );
}

export default ChangePasswordForm;
