"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { SwiperBreakpoints } from "@/src/types";

interface IProps {
  slides: React.ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  centerInsufficientSlides?: boolean;
  loop?: boolean;
  className?: string;
  breakpoints?: SwiperBreakpoints;
}

export default function SwiperSlider({
  slides,
  slidesPerView = 1,
  spaceBetween = 20,
  autoplay = false,
  pagination = true,
  navigation = false,
  centerInsufficientSlides = false,
  loop = true,
  className = "",
  breakpoints,
}: IProps) {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      centerInsufficientSlides={centerInsufficientSlides}
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplay ? { delay: 3000 } : false}
      navigation={navigation}
      className={`w-full ${className}`}
      breakpoints={breakpoints}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
