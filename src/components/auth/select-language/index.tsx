"use client";

import { Button } from "@/src/components/ui/Button";
import { languages } from "@/src/data/auth";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SelectLanguage() {
  const [selected, setSelected] = useState("en");
  const router = useRouter();

  // Handle language selection with animation
  const handleLanguageSelect = (langCode: string) => {
    setSelected(langCode);
  };

  const handleNext = () => {
    router.push("/select-method");
  };

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      {/* Left Side */}
      <div className="w-full max-w-lg">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-11 mb-3">
            CHOOSE YOUR LANGUAGE
          </h1>
        </header>
        <p className="text-gray-400 font-medium mb-8">
          You Can Change The Language In Your Profile Setting After Sign In
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          {languages.map((lang) => (
            <Button
              onClick={() => handleLanguageSelect(lang?.code)}
              key={lang.code}
              className={cn(
                "flex flex-col gap-3 items-center border rounded-xl px-8 py-4 sm:w-32 transition-all duration-150",
                selected === lang.code
                  ? "border-[#5B2E9D] shadow-lg"
                  : "border-gray-200"
              )}
            >
              <div>
                <Image
                  src={lang.flag}
                  alt="Select Language Illustration"
                  width={100}
                  height={100}
                />
              </div>
              <span className="font-semibold text-gray-700 text-lg">
                {lang.label}
              </span>
            </Button>
          ))}
        </div>
        <Button
          className="w-full bg-primary text-white py-3 rounded-lg font-medium mt-2 mb-8"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
      {/* Right Side */}
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image
          src="/select-language.png"
          alt="Select Language Illustration"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
