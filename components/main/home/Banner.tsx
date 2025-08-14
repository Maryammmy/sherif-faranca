"use client";

import { useHome } from "@/hooks";
import { IMerchantBanner } from "@/interfaces/main/home";
import Image from "next/image";

export default function Banner() {
  const { data } = useHome();
  const merchantBanner: IMerchantBanner = data?.data?.merchantBanners;
  if (!data) return null;
  const { imageUrl, title } = merchantBanner;

  return (
    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-5">
      <Image
        src={imageUrl}
        alt={title}
        className="object-center"
        fill
        priority
      />
    </div>
  );
}
