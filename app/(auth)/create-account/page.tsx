"use client";

import CreateAccountForm from "@/components/auth/create-profile/CreateAccountForm";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

function CreateAccountPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - hide all elements
      gsap.set([titleRef.current, formRef.current], {
        opacity: 0,
        y: 30,
      });

      gsap.set(illustrationRef.current, {
        opacity: 0,
        scale: 0.9,
        rotation: -3,
      });

      const tl = gsap.timeline();

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          formRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          illustrationRef.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
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
      <div className="space-y-3 flex flex-col justify-center w-full max-w-xl">
        <div ref={titleRef} className="space-y-3">
          <header>
            <h1 className="font-bold text-gray-800 text-3xl sm:text-4xl leading-11">
              MOMENT TO <span className="text-primary">BEGINNING</span>
            </h1>
          </header>
        </div>
        <div ref={formRef}>
          <CreateAccountForm />
        </div>
      </div>
      <div
        ref={illustrationRef}
        className="hidden lg:flex lg:items-center lg:justify-center"
      >
        <Image
          src="/create-account.png"
          alt="Create account"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default CreateAccountPage;
