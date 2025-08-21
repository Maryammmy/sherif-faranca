"use client";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <div className="space-y-3">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-11">
          SIGN UP{" "}
          <span className="text-primary">
            {pathname === "signup/number" ? "WITH NUMBER" : "WITH EMAIL"}
          </span>
        </h1>
      </header>
      <p className="text-gray-400 font-medium">
        Begin With Creating New Free Account. This Helps You Keep Your Health
        And Fitness
      </p>
    </div>
  );
}

export default Header;
