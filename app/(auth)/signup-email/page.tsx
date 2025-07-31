import SignupEmailForm from "@/components/auth/signup/signup-email/SignupEmailForm";
// import { gsap } from "gsap";
import Image from "next/image";
// import { useEffect, useRef } from "react";

function SignUpEmailPage() {
  // const containerRef = useRef<HTMLDivElement>(null);
  // const titleRef = useRef<HTMLDivElement>(null);
  // const formRef = useRef<HTMLDivElement>(null);
  // const illustrationRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Initial state - hide all elements
  //     gsap.set([titleRef.current, formRef.current], {
  //       opacity: 0,
  //       y: 30,
  //     });

  //     gsap.set(illustrationRef.current, {
  //       opacity: 0,
  //       scale: 0.9,
  //       x: 30,
  //     });

  //     const tl = gsap.timeline();

  //     tl.to(titleRef.current, {
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.8,
  //       ease: "power2.out",
  //     })
  //       .to(
  //         formRef.current,
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.7,
  //           ease: "power2.out",
  //         },
  //         "-=0.4"
  //       )
  //       .to(
  //         illustrationRef.current,
  //         {
  //           opacity: 1,
  //           scale: 1,
  //           x: 0,
  //           duration: 0.8,
  //           ease: "back.out(1.7)",
  //         },
  //         "-=0.5"
  //       );
  //   }, containerRef);

  //   return () => ctx.revert();
  // }, []);
  return (
    <div
      // ref={containerRef}
      className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5"
    >
      <div className="space-y-5 w-full max-w-lg">
        <div className="space-y-3">
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-11">
              SIGN UP <span className="text-primary">WITH EMAIL</span>
            </h1>
          </header>
          <p className="text-gray-400 font-medium">
            Begin With Creating New Free Account. This Helps You Keep Your
            Health And Fitness
          </p>
        </div>
        <div>
          <SignupEmailForm />
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image
          src="/signup.png"
          alt="sign up illustration"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default SignUpEmailPage;
