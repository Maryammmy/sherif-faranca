"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-5">
      {/* Background Image */}
      <Image
        src="/banner.png"
        alt="Fitness Banner"
        className="object-cover"
        fill
        priority
      />
    </div>
  );
}
