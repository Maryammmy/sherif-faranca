"use client";

import { cn } from "@/src/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../ui/Button";
import SidebarContent from "./SidebarContent";
import { useSidebar } from "@/src/context/sidebar";
import { useLocale } from "next-intl";

export default function Sidebar() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;
  const {
    isDesktopExpanded,
    toggleDesktopSidebar,
    isMobileOpen,
    closeMobileSidebar,
  } = useSidebar();
  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "relative hidden lg:flex flex-col bg-white shrink-0 transition-all duration-300 ease-in-out",
          isDesktopExpanded ? "w-64" : "w-20",
          isAr ? "border-l" : "border-r"
        )}
      >
        <SidebarContent isExpanded={isDesktopExpanded} />
        <Button
          onClick={toggleDesktopSidebar}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 bg-white border rounded-full p-1 text-gray-600 hover:text-primary hover:border-primary transition-all",
            isAr ? "-left-3" : "-right-3"
          )}
        >
          <ChevronIcon
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              !isDesktopExpanded && "rotate-180"
            )}
          />
        </Button>
      </aside>
      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden",
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobileSidebar}
      ></div>
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white z-50 flex flex-col transition-transform duration-300 ease-in-out lg:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent isExpanded={true} onLinkClick={closeMobileSidebar} />
      </aside>
    </>
  );
}
