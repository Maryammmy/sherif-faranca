import React from "react";
import { Button } from "@/src/components/ui/Button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "@/src/components/loader/Loader";
import InputErrorMessage from "@/src/components/ui/InputErrorMsg";
import toast from "react-hot-toast";
import { sendChangePhoneAPI } from "@/src/services/mutations/users";
import PhoneField from "@/src/components/ui/PhoneField";
import {
  ChangePhone,
  changePhoneSchema,
} from "@/src/schemas/main/settings/change-phone";
import { usePhone } from "@/src/hooks";

interface IProps {
  handleChangePhone: (phone: ChangePhone) => void;
}
export default function ChangePhoneForm({ handleChangePhone }: IProps) {
  const { data } = usePhone();
  const currentPhone = data?.data
    ? `${data.data.countryCode}${data.data.phoneNumber}`
    : "";
  const methods = useForm<ChangePhone>({
    resolver: zodResolver(changePhoneSchema(currentPhone)),
    mode: "onChange",
  });
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data: ChangePhone) => {
    const response = await sendChangePhoneAPI(data);
    if (response?.success) {
      toast.success(response?.message);
      handleChangePhone(data);
    } else {
      toast.error(response?.message);
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="">
          <div className="border border-gray-400 rounded-md py-3 px-1">
            <PhoneField
              numberName="phoneNumber"
              countryCodeName="countryCode"
            />
          </div>
          {errors?.phoneNumber && (
            <InputErrorMessage msg={errors.phoneNumber.message} />
          )}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary py-3 font-medium text-white rounded-md"
        >
          {isSubmitting ? <Loader /> : "Change phone number"}
        </Button>
      </form>
    </FormProvider>
  );
}
