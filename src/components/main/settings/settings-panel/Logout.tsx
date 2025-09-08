import { Button } from "@/src/components/ui/Button";
import { removeToken } from "@/src/lib/utils";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

function Logout() {
  const router = useRouter();
  const handleLogout = async () => {
    await removeToken();
    router.push("/signin?type=email");
  };
  return (
    <Button
      onClick={handleLogout}
      className="p-3 absolute bottom-2.5 w-full rounded-md bg-[#DA2828E5] font-medium text-white flex justify-between gap-2"
    >
      <span>Logout</span>
      <LogOut />
    </Button>
  );
}

export default Logout;
