"use client";

import { useHome } from "@/src/hooks";
import { IMerchantBanner } from "@/src/interfaces/main/home";
import Image from "@/src/components/ui/Image";
import SwiperSlider from "../../ui/SwiperSlider";
import { SkeletonCard } from "../../skeleton/Card";
import { EmptyState } from "../../ui/empty-state/EmptyState";
import Link from "next/link";

export default function Banner() {
  const { data } = useHome();
  const merchantBanners: IMerchantBanner[] = data?.data?.merchantBanners;
  return (
    <div className="py-5">
      {!data ? (
        <SkeletonCard
          count={1}
          className="h-[200px] md:h-[300px] 2xl:h-[400px]"
        />
      ) : merchantBanners?.length ? (
        <SwiperSlider
          slides={merchantBanners?.map(({ imageUrl, url, id }, i) => (
            <Link
              key={id}
              href={url}
              target="_blank"
              className="block relative w-full h-[200px] md:h-[300px] 2xl:h-[400px] rounded-3xl overflow-hidden"
            >
              <Image
                src={imageUrl}
                alt={`Slide ${i + 1}`}
                fill
                className="object-center"
                priority={i === 0}
              />
            </Link>
          ))}
          slidesPerView={1}
          autoplay={true}
          pagination={true}
          navigation={true}
          className="rounded-3xl overflow-hidden"
        />
      ) : (
        <EmptyState message="No banners found" />
      )}
    </div>
  );
}
