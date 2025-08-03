import { personalInformationForm } from "@/data/main/settings/account/personal-information";
import GenderSelector from "./GenderSelector";
import { Button } from "@/components/ui/Button";
import SettingsInput from "../../../SettingsInput";

function PersonalInformationForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
      {personalInformationForm.map((input) => (
        <SettingsInput key={input.id} input={input} />
      ))}
      <GenderSelector />
      <Button className="bg-primary py-3 font-medium text-white rounded-md">
        Save Change
      </Button>
    </form>
  );
}

export default PersonalInformationForm;
