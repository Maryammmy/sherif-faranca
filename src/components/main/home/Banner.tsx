"use client";

import { useHome } from "@/src/hooks";
import { IMerchantBanner } from "@/src/interfaces/main/home";
import Image from "next/image";
import SwiperSlider from "../../ui/SwiperSlider";

export default function Banner() {
  const { data } = useHome();
  const merchantBanner: IMerchantBanner = data?.data?.merchantBanners;
  if (!data) return null;
  console.log(merchantBanner);
  // const { imageUrl, title } = merchantBanner;
  const images = ["/about-us.jpg", "/banner.png"];
  return (
    <SwiperSlider
      slides={images.map((src, i) => (
        <div
          key={i}
          className="relative w-full h-[400px] rounded-3xl overflow-hidden"
        >
          <Image
            src={src}
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
    />
  );
}
