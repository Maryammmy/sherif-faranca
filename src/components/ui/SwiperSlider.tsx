"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface IProps {
  slides: React.ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  loop?: boolean;
  className?: string;
}

export default function SwiperSlider({
  slides,
  slidesPerView = 1,
  spaceBetween = 20,
  autoplay = false,
  pagination = true,
  navigation = false,
  loop = true,
  className = "",
}: IProps) {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplay ? { delay: 3000 } : false}
      navigation={navigation}
      className={`w-full ${className}`}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
