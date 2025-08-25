import React from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";

interface IProps {
  value: string;
  onChange: (fullValue: string, phoneOnly: string, countryCode: string) => void;
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
      }}
      onChange={(value, country: CountryData) => {
        const dialCode = country?.dialCode || "";
        const numberOnly = value.slice(dialCode.length);
        onChange(value, numberOnly, dialCode);
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
