import { SwiperOptions } from "swiper/types";

export type SwiperBreakpoints = { [width: number]: Partial<SwiperOptions> };
export type ParentType = {
  phoneNumber: string;
  countryCode: string;
  phoneFormat?: string;
};
