"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

function AuthPage() {
  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  // Animation effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (titleRef.current) {
        tl.from(titleRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power2.out",
        });
      }

      if (descriptionRef.current) {
        tl.from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }

      if (buttonsRef.current) {
        tl.from(
          buttonsRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      if (illustrationRef.current) {
        tl.from(
          illustrationRef.current,
          {
            opacity: 0,
            scale: 0.8,
            rotation: -5,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleButtonHover = (element: HTMLElement, isHovering: boolean) => {
    gsap.to(element, {
      scale: isHovering ? 1.05 : 1,
      y: isHovering ? -3 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  return (
    <div
      ref={containerRef}
      className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5"
    >
      <div className="space-y-10 w-full max-w-lg">
        <header ref={titleRef}>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-11 sm:leading-16">
            Welcome to{" "}
            <span className="text-primary">Sherif Franca platfom</span>
          </h1>
        </header>
        <div>
          <p ref={descriptionRef} className="text-[#ABADB7] font-medium">
            Discover fun and effective dance workouts for all levels. No
            experience needed – just move to the beat! Unleash your inner dancer
            and discover a fun way to achieve your fitness goals.
          </p>
        </div>
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10 font-medium"
        >
          <Link
            href="/signin"
            className="text-white bg-primary w-full sm:w-48 py-3 rounded text-center block"
            onMouseEnter={(e) => handleButtonHover(e.currentTarget, true)}
            onMouseLeave={(e) => handleButtonHover(e.currentTarget, false)}
          >
            Have Account Sign in
          </Link>
          <Link
            href="/select-language"
            className="border border-primary text-primary w-full sm:w-48 py-3 rounded text-center block"
            onMouseEnter={(e) => handleButtonHover(e.currentTarget, true)}
            onMouseLeave={(e) => handleButtonHover(e.currentTarget, false)}
          >
            New User Sign Up
          </Link>
        </div>
      </div>
      <div
        ref={illustrationRef}
        className="hidden lg:flex lg:justify-center lg:items-center"
      >
        <Image src="/auth.png" alt="auth" width={500} height={500} />
      </div>
    </div>
  );
}

export default AuthPage;
