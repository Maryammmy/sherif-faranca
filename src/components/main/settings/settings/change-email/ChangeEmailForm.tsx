import { email } from "@/src/data/main/settings";
import { Mail } from "lucide-react";
import React from "react";
import { Button } from "@/src/components/ui/Button";
import { useForm } from "react-hook-form";
import {
  ChangeEmail,
  changeEmailSchema,
} from "@/src/schemas/main/settings/change-email";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "@/src/components/loader/Loader";
import InputErrorMessage from "@/src/components/InputErrorMsg";
import toast from "react-hot-toast";
import { sendChangeEmailAPI } from "@/src/services/mutations/users";
import SettingsInput from "../../SettingsInput";

interface IProps {
  handleChangeEmail: (email: string) => void;
}
export default function ChangeEmailForm({ handleChangeEmail }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangeEmail>({
    resolver: zodResolver(changeEmailSchema),
    mode: "onChange",
  });
  const onSubmit = async (data: ChangeEmail) => {
    const response = await sendChangeEmailAPI(data);
    console.log(response);
    if (response?.success) {
      toast.success(response?.message);
      handleChangeEmail(data.newEmail);
    } else {
      toast.error(response?.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div>
          <SettingsInput
            input={email}
            withWrapper
            wrapperClassName="border border-gray-400 rounded-md p-3 flex gap-2 items-center justify-between"
            icon={<Mail size={22} className="text-primary" />}
            register={register}
          />
          {errors?.newEmail && (
            <InputErrorMessage msg={errors.newEmail.message} />
          )}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary py-3 font-medium text-white rounded-md"
        >
          {isSubmitting ? <Loader /> : "Change email"}
        </Button>
      </form>
    </>
  );
}
