"use client";

import Button from "@/components/ui/Button";
import { languages } from "@/data/auth/select-language";
import { gsap } from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SelectLanguagePage() {
  const [selected, setSelected] = useState("en");
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const languageButtonsRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          languageButtonsRef.current,
          nextButtonRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      gsap.set(illustrationRef.current, {
        opacity: 0,
        scale: 0.8,
      });

      const tl = gsap.timeline();

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          languageButtonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          nextButtonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          illustrationRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle language button hover animations
  const handleButtonHover = (element: HTMLElement, isHovering: boolean) => {
    gsap.to(element, {
      scale: isHovering ? 1.05 : 1,
      y: isHovering ? -2 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Handle language selection with animation
  const handleLanguageSelect = (langCode: string, element: HTMLElement) => {
    setSelected(langCode);

    // Add a quick scale animation for feedback
    gsap.fromTo(
      element,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 0.15,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      }
    );
  };

  const handleNext = () => {
    // Add exit animation before navigation
    gsap.to(containerRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        router.push("/select-method");
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5"
    >
      {/* Left Side */}
      <div className="w-full max-w-lg">
        <header ref={titleRef}>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-11 mb-3">
            CHOOSE YOUR LANGUAGE
          </h1>
        </header>
        <p ref={subtitleRef} className="text-gray-400 font-medium mb-8">
          You Can Change The Language In Your Profile Setting After Sign In
        </p>
        <div
          ref={languageButtonsRef}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-8"
        >
          {languages.map((lang) => (
            <Button
              key={lang.code}
              onClick={(e) => handleLanguageSelect(lang.code, e.currentTarget)}
              onMouseEnter={(e) => handleButtonHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleButtonHover(e.currentTarget, false)}
              className={`flex flex-col gap-3 items-center border rounded-xl px-8 py-4 sm:w-32 transition-all duration-150 ${
                selected === lang.code
                  ? "border-[#5B2E9D] shadow-lg"
                  : "border-gray-200"
              }`}
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
          ref={nextButtonRef}
          className="w-full bg-primary text-white py-3 rounded-lg font-medium mt-2 mb-8"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
      {/* Right Side */}
      <div
        ref={illustrationRef}
        className="hidden lg:flex lg:items-center lg:justify-center"
      >
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
