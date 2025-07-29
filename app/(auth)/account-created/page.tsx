"use client";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

function AccountCreatedPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - hide all elements
      gsap.set([titleRef.current, contentRef.current], {
        opacity: 0,
        y: 30,
      });

      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        x: 30,
      });

      const tl = gsap.timeline();

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          imageRef.current,
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
        <div ref={titleRef} className="space-y-3">
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-11 sm:leading-16">
              YOUR{" "}
              <span className="text-primary">ACCOUNT CREATED SUCCESSFULLY</span>
            </h1>
          </header>
        </div>
        <div ref={contentRef} className="py-5">
          <Link
            href="/questions/1"
            className="flex justify-center items-center bg-primary text-white p-3 rounded-md font-medium"
          >
            Let&apos;s customize your plan
          </Link>
        </div>
      </div>
      <div
        ref={imageRef}
        className="hidden lg:flex lg:items-center lg:justify-center"
      >
        <Image
          src="/created-account.png"
          alt="Created account"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default AccountCreatedPage;
