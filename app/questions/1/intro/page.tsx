"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

function Introduction() {
  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

      if (buttonRef.current) {
        tl.from(
          buttonRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      if (imageRef.current) {
        tl.from(
          imageRef.current,
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

  return (
    <div
      ref={containerRef}
      className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center min-h-screen padding-layout"
    >
      <div className="space-y-5 w-full max-w-lg">
        <header ref={titleRef}>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-700">
            Hello ! 👋
          </h1>
        </header>
        <div className="space-y-2" ref={descriptionRef}>
          <h5 className="text-lg text-gray-700">This data will help us</h5>
          <h4 className="text-gray-700 text-3xl font-bold leading-11">
            Here are some questions to
            <span className="text-primary"> personalized plan</span> for you.
          </h4>
        </div>
        <div ref={buttonRef} className="pt-5">
          <Link
            href="/questions/1/gender"
            className="flex justify-center items-center bg-primary text-white p-3 rounded-md font-medium"
          >
            Next
          </Link>
        </div>
      </div>
      <div
        ref={imageRef}
        className="hidden lg:flex lg:justify-center lg:items-center"
      >
        <Image src="/fitness-intro.png" alt="auth" width={500} height={500} />
      </div>
    </div>
  );
}

export default Introduction;
