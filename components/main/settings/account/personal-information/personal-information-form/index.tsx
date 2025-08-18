"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { personalInformationForm } from "@/data/main/settings/account/personal-information";
import GenderSelector from "./GenderSelector";
import { Button } from "@/components/ui/Button";
import SettingsInput from "../../../SettingsInput";
import { useProfile } from "@/hooks";
import { IProfile } from "@/interfaces/main/settings";

function PersonalInformationForm() {
  const { data } = useProfile();
  const profile = data?.data;

  // define the form with default values
  const { register, handleSubmit, reset } = useForm<IProfile>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      genderId: 0,
      // أي فيلدز تانية عندك
    },
  });

  // لما تيجي بيانات الـ profile من الـ API نزودها في الفورم
  useEffect(() => {
    if (data && profile) {
      reset({
        firstName: profile?.firstName,
        lastName: profile?.lastName,
        email: profile?.email,
        genderId: profile?.gender,
      });
    }
  }, [data, profile, reset]);

  // submit handler
  const onSubmit = (data: IProfile) => {
    console.log("Form submitted:", data);
    // هنا هتعملي API call للـ update endpoint
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {personalInformationForm.map((input) => (
        <SettingsInput<IProfile>
          key={input.id}
          input={input}
          register={register} // مرري الـ register عشان يربط RHF بالـ input
        />
      ))}

      <GenderSelector />

      <Button
        type="submit"
        className="bg-primary py-3 font-medium text-white rounded-md"
      >
        Save Change
      </Button>
    </form>
  );
}

export default PersonalInformationForm;
