"use client";
import { Input } from "@/components/ui/Input";
import { useEffect, useState } from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";

interface IProps {
  resetTrigger: boolean;
}
export default function PhoneField({ resetTrigger }: IProps) {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [fullNumber, setFullNumber] = useState("");
  console.log("dd", fullNumber);
  useEffect(() => {
    if (resetTrigger) {
      setFullNumber("");
      setPhone("");
      setCountryCode("");
    }
  }, [resetTrigger]);
  return (
    <>
      <PhoneInput
        country={"eg"}
        enableSearch
        disableCountryCode={true}
        placeholder="+20 10 12345678"
        value={fullNumber}
        onChange={(value, country: CountryData) => {
          const dialCode = country.dialCode;
          const numberOnly = value.slice(dialCode.length);
          setFullNumber(value);
          setPhone(numberOnly);
          setCountryCode(dialCode);
        }}
        inputStyle={{
          width: "100%",
          border: "none",
          boxShadow: "none",
          height: "24px",
        }}
        buttonStyle={{
          border: "none",
          background: "transparent",
        }}
        containerStyle={{
          width: "100%",
        }}
      />
      {/* These inputs will be sent with formData */}
      <Input type="hidden" name="phoneNumber" value={phone} />
      <Input type="hidden" name="countryCode" value={countryCode} />
    </>
  );
}
