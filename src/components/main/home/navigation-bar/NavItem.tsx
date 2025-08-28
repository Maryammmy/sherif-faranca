import { Button } from "@/src/components/ui/Button";
import { INavItem } from "@/src/interfaces/main/home";

interface IProps {
  navItem: INavItem;
}
function NavItem({ navItem }: IProps) {
  const { icon: Icon, label } = navItem;
  return (
    <Button className="flex items-center w-full gap-2 p-2 border bg-transparent rounded-lg text-gray-700 hover:bg-gray-100 transition">
      <Icon size={18} className="shrink-0" />
      <span className="font-medium">{label}</span>
    </Button>
  );
}

export default NavItem;
