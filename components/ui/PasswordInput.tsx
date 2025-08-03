"use client";
import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "./Input";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export default function PasswordInput({ className, ...rest }: IProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-between items-center gap-2 w-full">
      {/* Lock Icon */}
      <div className="text-primary">
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
        className="cursor-pointer text-primary"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
      </div>
    </div>
  );
}
