"use client";

import { Button } from "@/src/components/ui/Button";
import { Controller, useFormContext } from "react-hook-form";
import InputErrorMessage from "@/src/components/ui/InputErrorMsg";
import { genders } from "@/src/data/main/settings/account/personal-information";
import { useTranslations } from "next-intl";

function GenderSelector() {
  const t = useTranslations("form");
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-gray-400">{t("gender.gender")}</label>
      <Controller
        name="isMale"
        control={control}
        render={({ field, fieldState }) => (
          <>
            <div className="grid grid-cols-2 gap-4">
              {genders.map((g) => (
                <Button
                  type="button"
                  key={g.label}
                  onClick={() => field.onChange(g.value)}
                  className={`py-1.5 rounded-md border font-medium ${
                    field.value === g.value ? "bg-primary text-white" : ""
                  }`}
                >
                  {t(g.label)}
                </Button>
              ))}
            </div>
            {fieldState.error && (
              <InputErrorMessage msg={fieldState.error.message} />
            )}
          </>
        )}
      />
    </div>
  );
}

export default GenderSelector;
