"use client";

import SignInForm from "@/components/auth/signin/SignInForm";
import SocialMediaSignIn from "@/components/auth/signin/SocialMediaLogin";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

function SignInPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - hide all elements
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          formRef.current,
          socialRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      gsap.set(illustrationRef.current, {
        opacity: 0,
        scale: 0.9,
        x: 20,
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
          formRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          socialRef.current,
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
            x: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={containerRef}
      className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5"
    >
      <div className="space-y-5 w-full max-w-lg">
        <header>
          <h2
            ref={titleRef}
            className="text-primary text-3xl sm:text-4xl font-bold leading-11"
          >
            Welcome Back!
          </h2>
        </header>
        <h5
          ref={subtitleRef}
          className="text-gray-800 text-xl sm:text-2xl font-semibold"
        >
          You’ve been missed!
        </h5>
        <div ref={formRef}>
          <SignInForm />
        </div>
        <div ref={socialRef}>
          <SocialMediaSignIn />
        </div>
      </div>
      <div
        ref={illustrationRef}
        className="hidden lg:flex lg:items-center lg:justify-center"
      >
        <Image src="/login.png" alt="logo" width={500} height={500} />
      </div>
    </div>
  );
}

export default SignInPage;
