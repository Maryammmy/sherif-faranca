"use client";

import { useHome } from "@/src/hooks";
import { IMerchantBanner } from "@/src/interfaces/main/home";
import Image from "next/image";
import { SkeletonCard } from "../../skeleton/Card";
import Link from "next/link";

export default function Banner() {
  const { data } = useHome();
  const merchantBanner: IMerchantBanner = data?.data?.merchantBanners;
  return (
    <div className="py-5">
      {!data ? (
        <SkeletonCard
          count={1}
          className="h-[200px] md:h-[300px] 2xl:h-[400px]"
        />
      ) : (
        <Link
          href={merchantBanner?.url}
          target="_blank"
          className="relative block w-full h-[200px] md:h-[300px] 2xl:h-[400px] rounded-3xl overflow-hidden"
        >
          <Image
            src={merchantBanner?.imageUrl}
            alt="Banner"
            fill
            className="object-center"
            priority
          />
        </Link>
      )}
    </div>
  );
}
