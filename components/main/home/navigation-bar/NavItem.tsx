import { Button } from "@/components/ui/Button";
import { INavItem } from "@/interfaces/main/home";

interface IProps {
  navItem: INavItem;
}
function NavItem({ navItem }: IProps) {
  const { icon: Icon, label } = navItem;
  return (
    <Button className="flex items-center gap-2 px-4 py-2 border bg-transparent rounded-lg text-gray-700 hover:bg-gray-100 transition">
      <Icon size={18} />
      <span className="font-medium">{label}</span>
    </Button>
  );
}

export default NavItem;
