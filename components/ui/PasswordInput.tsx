"use client";
import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "./Input";
import { Button } from "./Button";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export default function PasswordInput({ className, ...rest }: IProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-between items-center gap-2 w-full">
      {/* Lock Icon */}
      <span className="text-primary">
        <Lock size={20} />
      </span>

      {/* Input Field */}
      <Input
        {...rest}
        type={showPassword ? "text" : "password"}
        className={className}
      />

      {/* Eye Toggle Icon */}
      <Button
        type="button"
        className="text-primary"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
      </Button>
    </div>
  );
}
