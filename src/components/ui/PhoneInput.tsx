import React from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";

interface IProps {
  value: string;
  onChange: (
    fullValue: string,
    phoneOnly: string,
    countryCode: string,
    format: string
  ) => void;
  country: string;
  disabled: boolean;
}

const PhoneInputField: React.FC<IProps> = ({
  value,
  onChange,
  country,
  disabled,
}) => {
  return (
    <PhoneInput
      country={country}
      enableSearch
      placeholder="+20 10 12345678"
      value={value}
      disableDropdown={disabled}
      inputProps={{
        readOnly: disabled,
        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            e.preventDefault();
            const form = (e.target as HTMLInputElement).form;
            if (form) {
              form.requestSubmit(); // بيعمل submit للـ form
            }
          }
        },
      }}
      onChange={(value, country: CountryData) => {
        const dialCode = country?.dialCode || "";
        const numberOnly = value.slice(dialCode.length);
        const format = country?.format || ""; // ناخد الـ format
        onChange(value, numberOnly, dialCode, format);
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
  );
};

export default PhoneInputField;
