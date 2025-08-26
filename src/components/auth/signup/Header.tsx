"use client";
import { useQueryParams } from "@/src/lib/utils";

function Header() {
  const type = useQueryParams("type");
  return (
    <div className="space-y-3">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-11">
          SIGN UP{" "}
          <span className="text-primary">
            {type === "number" ? "WITH NUMBER" : "WITH EMAIL"}
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
