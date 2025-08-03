"use client";

import Image from "next/image";
import Link from "next/link";

function Auth() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      <div className="space-y-10 w-full max-w-lg">
        <header>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-11 sm:leading-16">
            Welcome to{" "}
            <span className="text-primary">Sherif Franca platfom</span>
          </h1>
        </header>
        <div>
          <p className="text-[#ABADB7] font-medium">
            Discover fun and effective dance workouts for all levels. No
            experience needed – just move to the beat! Unleash your inner dancer
            and discover a fun way to achieve your fitness goals.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10 font-medium">
          <Link
            href="/signin"
            className="text-white bg-primary w-full sm:w-48 py-3 rounded text-center block"
          >
            Have Account Sign in
          </Link>
          <Link
            href="/select-language"
            className="border border-primary text-primary w-full sm:w-48 py-3 rounded text-center block"
          >
            New User Sign Up
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-center lg:items-center">
        <Image src="/auth.png" alt="auth" width={500} height={500} />
      </div>
    </div>
  );
}

export default Auth;
