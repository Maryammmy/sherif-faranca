import { navItems } from "@/src/data/main/home";
import NavItem from "./NavItem";

export default function NavigationBar() {
  return (
    <div className="flex gap-3">
      {navItems.map((navItem, index) => (
        <NavItem key={index} navItem={navItem} />
      ))}
    </div>
  );
}
