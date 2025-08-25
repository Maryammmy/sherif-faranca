"use client";
import { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { personalInformationForm } from "@/src/data/main/settings/account/personal-information";
import GenderSelector from "./GenderSelector";
import { Button } from "@/src/components/ui/Button";
import SettingsInput from "../../../SettingsInput";
import { useProfile } from "@/src/hooks";
import { IProfile } from "@/src/interfaces/main/settings";
import { Label } from "@/src/components/ui/Label";
import { DatePicker } from "@/src/components/ui/date-picker";
import PhoneField from "@/src/components/ui/PhoneField";
import { updateProfileAPI } from "@/src/services/mutations/users";
import Loader from "@/src/components/loader/Loader";
import toast from "react-hot-toast";
import { Profile, profileSchema } from "@/src/schemas/main/settings/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import InputErrorMessage from "@/src/components/InputErrorMsg";

interface IProps {
  close: () => void;
}
function PersonalInformationForm({ close }: IProps) {
  const { data, refetch } = useProfile();
  const profile = data?.data;

  const methods = useForm<Profile>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors, isSubmitting },
  } = methods;
  // لما تيجي بيانات الـ profile من الـ API نزودها في الفورم
  useEffect(() => {
    if (data && profile) {
      reset({
        firstName: profile?.firstName,
        lastName: profile?.lastName,
        email: profile?.email,
        birthDate: profile?.birthDate,
        phoneNumber: profile?.phoneNumber,
        countryCode: "20",
        isMale: profile?.isMale,
      });
    }
  }, [data, profile, reset]);
  // submit handler
  const onSubmit = async (data: IProfile) => {
    // console.log("Form submitted:", data);
    const response = await updateProfileAPI(data);
    if (response?.success) {
      toast.success(response?.message);
      await refetch();
      setTimeout(() => {
        close();
      }, 500);
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {personalInformationForm.map((input) => {
          const error = errors[input.name as keyof Profile];
          return (
            <div key={input.id}>
              <SettingsInput input={input} register={register} />
              {error && <InputErrorMessage msg={error.message} />}
            </div>
          );
        })}
        <div className="flex flex-col gap-1">
          <Label className="text-gray-400 font-medium">Phone number</Label>
          <div className="border-b">
            <PhoneField
              numberName="phoneNumber"
              countryCodeName="countryCode"
              disabled
            />
          </div>
          {errors.phoneNumber && (
            <InputErrorMessage msg={errors?.phoneNumber?.message} />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="font-medium text-gray-400">Birthday</Label>
          <div className="border-b">
            <Controller
              name="birthDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  name={field.name}
                  value={field?.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          {errors.birthDate && (
            <InputErrorMessage msg={errors?.birthDate?.message} />
          )}
        </div>
        <GenderSelector />
        <Button
          disabled={isSubmitting}
          type="submit"
          className="bg-primary py-3 font-medium text-white rounded-md"
        >
          {isSubmitting ? <Loader /> : "Save Change"}
        </Button>
      </form>
    </FormProvider>
  );
}

export default PersonalInformationForm;
