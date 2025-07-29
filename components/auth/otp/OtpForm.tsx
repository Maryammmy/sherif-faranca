"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function OtpForm() {
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const [timer, setTimer] = useState(20);
  const router = useRouter();

  // Refs for OTP input boxes
  const otpBoxesRef = useRef<(HTMLInputElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Animation effect for OTP boxes
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - hide all OTP boxes
      gsap.set(otpBoxesRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 20,
      });

      // Staggered entrance animation for OTP boxes
      gsap.to(otpBoxesRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.3, // 0.1 second delay between each box
        delay: 0.3, // Start after the form container animation
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle input animation when user types
  const handleInputAnimation = (element: HTMLInputElement) => {
    gsap.fromTo(
      element,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 0.15,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      },
    );
  };

  // Handle focus animation
  const handleFocusAnimation = (element: HTMLInputElement) => {
    gsap.to(element, {
      borderColor: "#5B2E9D", // primary color
      boxShadow: "0 0 0 3px rgba(91, 46, 157, 0.1)",
      duration: 0.2,
      ease: "power2.out",
    });
  };

  // Handle blur animation
  const handleBlurAnimation = (element: HTMLInputElement) => {
    gsap.to(element, {
      borderColor: "#9CA3AF", // gray-400
      boxShadow: "none",
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Add animation when user types
    if (element.value) {
      handleInputAnimation(element);
    }

    //Focus next input - This will be simplified
    if (element.nextSibling && element.value) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div ref={containerRef} className="space-y-5 py-5">
      <div className="flex justify-center gap-2 lg:gap-5">
        {otp.map((data, index) => {
          return (
            <Input
              ref={el => {
                otpBoxesRef.current[index] = el;
              }}
              className="w-12 h-12 lg:w-14 lg:h-14 text-center text-lg border border-gray-400 rounded-md"
              type="text"
              name="otp"
              maxLength={1}
              key={index}
              value={data}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target, index)}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                e.target.select();
                handleFocusAnimation(e.target);
              }}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                handleBlurAnimation(e.target);
              }}
            />
          );
        })}
      </div>
      <Button
        type="submit"
        className="w-full bg-primary text-white p-3 rounded-md font-medium cursor-pointer"
        onClick={() => router.push("/create-account")}
      >
        Verify
      </Button>
      <div className="text-center">
        <Button disabled={timer > 0} className="text-primary disabled:text-gray-400 font-medium">
          Send Code Again {timer > 0 && `00:${timer.toString().padStart(2, "0")}`}
        </Button>
      </div>
    </div>
  );
}
