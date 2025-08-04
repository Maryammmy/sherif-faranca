"use client";
import { Input } from "@/components/ui/Input";
import PhoneInputField from "@/components/ui/PhoneInput";
import { useEffect, useState } from "react";

interface IProps {
  resetTrigger: boolean;
  numberName: string;
  countryCodeName: string;
}
export default function PhoneField({
  resetTrigger,
  numberName,
  countryCodeName,
}: IProps) {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [fullNumber, setFullNumber] = useState("");
  useEffect(() => {
    if (resetTrigger) {
      setFullNumber("");
      setPhone("");
      setCountryCode("");
    }
  }, [resetTrigger]);
  return (
    <>
      <PhoneInputField
        value={fullNumber}
        onChange={(full, only, code) => {
          setFullNumber(full);
          setPhone(only);
          setCountryCode(code);
        }}
      />
      {/* These inputs will be sent with formData */}
      <Input type="hidden" name={numberName} value={phone} />
      <Input type="hidden" name={countryCodeName} value={countryCode} />
    </>
  );
}
