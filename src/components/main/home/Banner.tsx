"use client";

import { useHome } from "@/src/hooks";
import { IMerchantBanner } from "@/src/interfaces/main/home";
import Image from "next/image";
import SwiperSlider from "../../ui/SwiperSlider";
import { SkeletonCard } from "../../skeleton/Card";

export default function Banner() {
  const { data } = useHome();
  const merchantBanners: IMerchantBanner[] = data?.data?.merchantBanners;
  console.log(merchantBanners);
  return (
    <>
      {!data ? (
        <SkeletonCard
          count={1}
          className="h-[200px] md:h-[300px] 2xl:h-[400px]"
        />
      ) : merchantBanners?.length ? (
        <SwiperSlider
          slides={merchantBanners?.map(({ imageUrl }, i) => (
            <div
              key={i}
              className="relative w-full h-[200px] md:h-[300px] 2xl:h-[400px] rounded-3xl overflow-hidden"
            >
              <Image
                src={imageUrl}
                alt={`Slide ${i + 1}`}
                fill
                className="object-center"
                priority={i === 0}
              />
            </div>
          ))}
          slidesPerView={1}
          autoplay={true}
          pagination={true}
          navigation={true}
          className="rounded-3xl overflow-hidden"
        />
      ) : (
        <p className="col-span-full text-gray-500 text-center font-medium">
          No banner found
        </p>
      )}
    </>
  );
}
