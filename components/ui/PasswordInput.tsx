"use client";
import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import Input from "./Input";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string;
}
export default function PasswordInput({ className, ...rest }: IProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      {/* Lock Icon */}
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary">
        <Lock size={20} />
      </div>

      {/* Input Field */}
      <Input
        {...rest}
        type={showPassword ? "text" : "password"}
        className={className}
      />

      {/* Eye Toggle Icon */}
      <div
        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-primary"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
      </div>
    </div>
  );
}
