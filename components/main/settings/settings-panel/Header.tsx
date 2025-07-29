import { CloseButtonPanel } from "@/components/ui/Panel";
import Image from "next/image";

function Header() {
  return (
    <div className="flex items-center gap-2 py-5 sm:py-10 px-2.5">
      <CloseButtonPanel closeButtonClassname="text-white border-white" />
      <div className="shrink-0 relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          src="/user.jpg"
          alt="user"
          className="object-cover"
          fill
          sizes="40px"
        />
      </div>
      <div className="flex flex-col gap-2 text-white">
        <h2 className="text-xs sm:text-lg font-bold leading-none">
          Welcome Mahmoud
        </h2>
        <p className="font-medium text-xs sm:text-base leading-none">
          Mahmoud@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Header;
