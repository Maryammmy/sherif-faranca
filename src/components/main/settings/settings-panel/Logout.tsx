import { Button } from "@/src/components/ui/Button";
import { removeToken } from "@/src/lib/utils";
import { LogOut } from "lucide-react";

function Logout() {
  const handleLogout = async () => {
    await removeToken();
    window.location.href = "/signin?type=email";
  };
  return (
    <Button
      onClick={handleLogout}
      className="p-3 rounded-md bg-[#DA2828E5] font-medium text-white flex justify-between gap-2"
    >
      <span>Logout</span>
      <LogOut />
    </Button>
  );
}

export default Logout;
