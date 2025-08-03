import { email } from "@/data/main/settings/change-email";
import { Mail } from "lucide-react";
import React from "react";
import SettingsInput from "../SettingsInput";
import { Button } from "@/components/ui/Button";

interface IProps {
  handleConfirmEmail: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function ChangeEmailForm({ handleConfirmEmail }: IProps) {
  return (
    <>
      <form onSubmit={handleConfirmEmail} className="flex flex-col gap-5">
        <SettingsInput
          input={email}
          withWrapper
          wrapperClassName="border border-gray-400 rounded-md py-3 px-3 flex gap-2 items-center justify-between"
          icon={<Mail size={22} className="text-primary" />}
        />
        <Button className="bg-primary py-3 font-medium text-white rounded-md">
          Change email
        </Button>
      </form>
    </>
  );
}
