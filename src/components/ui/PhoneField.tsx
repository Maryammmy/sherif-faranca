"use client";
import { Input } from "@/src/components/ui/Input";
import PhoneInputField from "@/src/components/ui/PhoneInput";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  resetTrigger?: boolean;
  serverAction?: boolean;
  numberName: string;
  countryCodeName: string;
  country?: string;
  disabled?: boolean;
}
export default function PhoneField({
  resetTrigger,
  serverAction = false,
  numberName,
  countryCodeName,
  country = "eg",
  disabled = false,
}: IProps) {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("20");
  const [fullNumber, setFullNumber] = useState("");
  const form = useFormContext();
  const setValue = form?.setValue;
  const getValues = form?.getValues;
  useEffect(() => {
    if (form) {
      const phone = getValues("phoneNumber");
      const code = getValues("countryCode");
      if (phone && code) {
        setPhone(phone);
        setCountryCode(code);
        setFullNumber(`+${code}${phone}`);
      }
    }
  }, [form, getValues]);
  useEffect(() => {
    if (resetTrigger) {
      setFullNumber("");
      setPhone("");
      setCountryCode("20");
    }
  }, [resetTrigger]);
  return (
    <>
      <PhoneInputField
        country={country}
        value={fullNumber}
        onChange={(full, only, code, format) => {
          setFullNumber(full);
          setPhone(only);
          setCountryCode(code);
          if (!serverAction && setValue) {
            // هنا بنربط القيم بـ RHF
            setValue(numberName, only, { shouldValidate: true });
            setValue(countryCodeName, code, { shouldValidate: true });
            // مهم: نخزن الـ format كـ internal value
            if (format) {
              setValue("phoneFormat", format, { shouldValidate: true });
            }
          }
        }}
        disabled={disabled}
      />
      {/* These inputs will be sent with formData */}
      {serverAction && (
        <>
          <Input type="hidden" name={numberName} value={phone} />
          <Input type="hidden" name={countryCodeName} value={countryCode} />
        </>
      )}
    </>
  );
}
