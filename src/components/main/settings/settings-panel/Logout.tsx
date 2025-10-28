import { Button } from "@/src/components/ui/Button";
import { removeToken } from "@/src/lib/utils";
import { LogOut } from "lucide-react";
import { useRouter } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

function Logout() {
  const t = useTranslations("settings");
  const router = useRouter();
  const handleLogout = async () => {
    await removeToken();
    router.push("/signin?type=email");
  };
  return (
    <Button
      onClick={handleLogout}
      className="p-3 rounded-md bg-[#DA2828E5] font-medium text-white flex justify-between gap-2"
    >
      <span>{t("logout")}</span>
      <LogOut />
    </Button>
  );
}

export default Logout;
