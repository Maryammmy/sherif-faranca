"use client";
import Image from "next/image";
import { usePrivacyPolicy } from "@/src/hooks";

function Details() {
  const { data } = usePrivacyPolicy();
  if (!data) return null;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: data }}
      />
      <div className="order-first lg:order-none">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="/privacy-policy.jpg"
            alt="Privacy illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
