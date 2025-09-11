import { ILanguage } from "../interfaces";
import { SwiperBreakpoints } from "../types";

export const navBreakpoints: SwiperBreakpoints = {
  640: { slidesPerView: 3 },
  768: { slidesPerView: 4 },
  1280: { slidesPerView: 5 },
  1440: { slidesPerView: 6 },
  1536: { slidesPerView: 8 },
};
export const languages: ILanguage[] = [
  {
    code: "en",
    label: "english",
    flag: "/us-flag.svg",
  },
  {
    code: "fr",
    label: "french",
    flag: "/fr-flag.svg",
  },
  {
    code: "ar",
    label: "arabic",
    flag: "/ar-flag.svg",
  },
];
export const periods: string[] = ["monthly", "yearly"];
