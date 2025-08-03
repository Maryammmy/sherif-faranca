"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ForgetPasswordForm() {
  const router = useRouter();
  const handleNext = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/otp"); // Adjust path if needed
  };

  return (
    <form className="py-5 space-y-5">
      <div className="flex flex-col gap-1">
        <Label className="text-secondary font-medium">Email</Label>
        <div className="flex p-3 gap-1 items-center border border-gray-400 rounded-md">
          <Mail className="text-primary" />
          <Input
            className="flex-1 placeholder:text-gray-400"
            placeholder="Email"
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full bg-primary text-white p-3 rounded-md font-medium cursor-pointer"
        onClick={handleNext}
      >
        Send Verification Code
      </Button>
    </form>
  );
}
