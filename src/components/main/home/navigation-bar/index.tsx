import { navItems } from "@/src/data/main/home";
import NavItem from "./NavItem";
import SwiperSlider from "@/src/components/ui/SwiperSlider";
import { navBreakpoints } from "@/src/data";

export default function NavigationBar() {
  return (
    <SwiperSlider
      slides={navItems.map((navItem, index) => (
        <NavItem key={index} navItem={navItem} />
      ))}
      slidesPerView={2}
      spaceBetween={20}
      pagination={false}
      breakpoints={navBreakpoints}
      centerInsufficientSlides
      loop={false}
      className="mb-5"
    />
  );
}
