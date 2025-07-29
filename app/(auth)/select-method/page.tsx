"use client";

import Button from "@/components/ui/Button";
import { socialButtons } from "@/data/auth/select-method";
import { gsap } from "gsap";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SelectMethodPage() {
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const primaryButtonsRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const socialButtonsRef = useRef<HTMLDivElement>(null);
  const signInLinkRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          primaryButtonsRef.current,
          dividerRef.current,
          socialButtonsRef.current,
          signInLinkRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      gsap.set(illustrationRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: 3,
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
          primaryButtonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          dividerRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          socialButtonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          signInLinkRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          illustrationRef.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle button hover animations
  const handleButtonHover = (element: HTMLElement, isHovering: boolean) => {
    gsap.to(element, {
      scale: isHovering ? 1.02 : 1,
      y: isHovering ? -2 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  return (
    <div
      ref={containerRef}
      className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5"
    >
      {/* Left Side */}
      <div className="space-y-2 w-full max-w-lg">
        <header ref={titleRef}>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 leading-11 max-w-[529px]">
            REGISTER TO <span className="text-primary">CHANGE</span>
          </h1>
        </header>
        <h2
          ref={subtitleRef}
          className="text-2xl md:text-3xl font-medium text-gray-400 mb-8"
        >
          START FITNESS JOURNEY
        </h2>
        <div ref={primaryButtonsRef} className="flex flex-col gap-5 pb-6">
          <Button
            className="w-full bg-primary text-white py-3 rounded-lg font-medium flex items-center justify-center gap-4"
            onClick={() => router.push("/signup-email")}
            onMouseEnter={(e) => handleButtonHover(e.currentTarget, true)}
            onMouseLeave={(e) => handleButtonHover(e.currentTarget, false)}
          >
            <Mail className="w-5 h-5" />
            <span>Continue with Email</span>
          </Button>
          <Button
            className="w-full border border-primary text-primary py-3 rounded-lg font-medium flex items-center justify-center gap-4"
            onClick={() => router.push("/signup-number")}
            onMouseEnter={(e) => handleButtonHover(e.currentTarget, true)}
            onMouseLeave={(e) => handleButtonHover(e.currentTarget, false)}
          >
            <Phone className="w-5 h-5" />
            <span>Continue with Number</span>
          </Button>
        </div>

        <div ref={dividerRef} className="flex items-center gap-2 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-sm">Or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div ref={socialButtonsRef} className="flex flex-col gap-4 mb-8">
          {socialButtons.map((btn, i) => (
            <Button
              key={i}
              className="w-full border border-gray-200 py-3 rounded-lg font-medium flex items-center gap-2 justify-center hover:bg-gray-50 transition"
              onMouseEnter={(e) => handleButtonHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleButtonHover(e.currentTarget, false)}
            >
              <Image src={btn.icon} alt={btn.alt} width={22} height={22} />
              {btn.label}
            </Button>
          ))}
        </div>
        <div ref={signInLinkRef} className="text-center text-gray-400 mb-8">
          have an account ?{" "}
          <Link
            href="/signin"
            className="text-primary font-semibold hover:underline"
          >
            sign in
          </Link>
        </div>
      </div>
      {/* Right Side */}
      <div
        ref={illustrationRef}
        className="hidden lg:flex lg:items-center lg:justify-center"
      >
        <Image
          src="/signup.png"
          alt="Sign Up Illustration"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
