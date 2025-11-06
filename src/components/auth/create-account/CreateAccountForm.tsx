"use client";

import { useState } from "react";
import { useRouter } from "@/src/i18n/navigation";
import toast from "react-hot-toast";
import {
  useForm,
  Controller,
  SubmitHandler,
  FormProvider,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { Label } from "@/src/components/ui/Label";
import InputErrorMessage from "@/src/components/ui/InputErrorMsg";
import PhoneField from "../../ui/PhoneField";
import { DatePicker } from "@/src/components/ui/date-picker";
import PasswordInput from "@/src/components/ui/PasswordInput";
import TermsAndConditionsModal from "../signup/TermsAndConditionsModal";

import {
  createAccountWithEmailSchema,
  createAccountWithNumberSchema,
} from "@/src/schemas/auth";
import {
  signupWithEmailAPI,
  signupWithNumberAPI,
} from "@/src/services/mutations/auth";
import { setToken, useQueryParams } from "@/src/lib/utils";
import { useTranslations } from "next-intl";

export default function CreateAccountForm() {
  const t = useTranslations("form");
  const router = useRouter();
  const { type, email } = useQueryParams();
  const [termsOpen, setTermsOpen] = useState(false);

  // choose schema based on registration type
  const schema =
    type === "register-email"
      ? createAccountWithEmailSchema
      : createAccountWithNumberSchema;

  type FormValues = z.infer<typeof schema>;
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues:
      type === "register-email"
        ? ({
            birthDate: "",
            phoneNumber: "",
            email: email || "",
          } as Partial<FormValues>)
        : ({ birthDate: "", phoneNumber: "" } as Partial<FormValues>),
  });

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = methods;
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    let result;
    if (type === "register-email") {
      // inject email from query params
      result = await signupWithEmailAPI({
        ...data,
        email: email,
      });
    } else {
      result = await signupWithNumberAPI(data);
    }
    if (result.success) {
      const token = result?.data?.token;
      if (token) {
        await setToken(token);
      }
      toast.success(result.message);
      setTermsOpen(false);
      setTimeout(() => {
        router.push("/account-created");
      }, 500);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(() => setTermsOpen(true))}
        className="space-y-5 py-3"
      >
        {/* First Name */}
        <div className="flex flex-col gap-1">
          <Label className="font-medium text-secondary">
            {t("firstName.name")}
          </Label>
          <div className="flex items-center gap-1 p-3 border rounded-md">
            <Input
              {...register("firstName")}
              placeholder={t("firstName.placeholder")}
              className="w-full"
            />
          </div>
          {errors.firstName && (
            <InputErrorMessage msg={errors.firstName.message} />
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1">
          <Label className="font-medium text-secondary">
            {t("lastName.name")}
          </Label>
          <div className="flex items-center gap-1 p-3 border rounded-md">
            <Input
              {...register("lastName")}
              placeholder={t("lastName.placeholder")}
              className="w-full"
            />
          </div>
          {errors.lastName && (
            <InputErrorMessage msg={errors.lastName.message} />
          )}
        </div>

        {/* Birth Date */}
        <div className="flex flex-col gap-1">
          <Label className="font-medium text-secondary">
            {t("birthDate.name")}
          </Label>
          <div className="flex items-center gap-1 p-3 border rounded-md">
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
            <InputErrorMessage msg={errors.birthDate.message} />
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1">
          <Label className="text-secondary font-medium">
            {t("phoneNumber.name")}
          </Label>
          <div
            className="flex items-center gap-1 p-3 border rounded-md"
            dir="ltr"
          >
            <PhoneField
              numberName="phoneNumber"
              countryCodeName="countryCode"
            />
          </div>
          {errors.phoneNumber && (
            <InputErrorMessage msg={errors.phoneNumber.message} />
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <Label className="font-medium text-secondary">
            {t("password.name")}
          </Label>
          <div className="flex items-center gap-1 p-3 border rounded-md">
            <PasswordInput
              {...register("password")}
              className="w-full"
              placeholder={t("password.placeholder")}
            />
          </div>
          {errors.password && (
            <InputErrorMessage msg={errors.password.message} />
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1">
          <Label className="font-medium text-secondary">
            {t("confirmPassword.name")}
          </Label>
          <div className="flex items-center gap-1 p-3 border rounded-md">
            <PasswordInput
              {...register("confirmPassword")}
              className="w-full"
              placeholder={t("confirmPassword.placeholder")}
            />
          </div>
          {errors.confirmPassword && (
            <InputErrorMessage msg={errors.confirmPassword.message} />
          )}
        </div>

        {/* Button */}
        <Button
          type="submit"
          className="w-full bg-primary text-white p-3 rounded-md font-medium"
        >
          {t("buttons.createAccount")}
        </Button>

        {termsOpen && (
          <TermsAndConditionsModal
            open={termsOpen}
            onClose={() => setTermsOpen(false)}
            isPending={isSubmitting}
            onAgree={() => {
              handleSubmit(onSubmit)();
            }}
          />
        )}
      </form>
    </FormProvider>
  );
}
