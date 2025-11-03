"use client";
import { Button } from "@/src/components/ui/Button";
import { changePasswordForm } from "@/src/data/main/settings";
import SettingsInput from "../../SettingsInput";
import { useForm } from "react-hook-form";
import {
  ChangePassword,
  changePasswordSchema,
} from "@/src/schemas/main/settings/change-password";
import { zodResolver } from "@hookform/resolvers/zod";
import InputErrorMessage from "@/src/components/ui/InputErrorMsg";
import Loader from "@/src/components/loader/Loader";
import toast from "react-hot-toast";
import { changePasswordAPI } from "@/src/services/mutations/users";
import { useTranslations } from "next-intl";

interface IProps {
  close: () => void;
}
function ChangePasswordForm({ close }: IProps) {
  const t = useTranslations("changePassword");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangePassword>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onChange",
  });
  const onSubmit = async (data: ChangePassword) => {
    const response = await changePasswordAPI(data);
    if (response?.success) {
      toast.success(response?.message);
      setTimeout(() => {
        close();
      }, 500);
    } else {
      toast.error(response?.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {changePasswordForm.map((input) => {
        const error = errors[input.name as keyof ChangePassword];
        return (
          <div key={input.id}>
            <SettingsInput input={input} register={register} />
            {error && <InputErrorMessage msg={error.message} />}
          </div>
        );
      })}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary py-3 font-medium text-white rounded-md"
      >
        {isSubmitting ? <Loader /> : t("changePassword")}
      </Button>
    </form>
  );
}

export default ChangePasswordForm;
