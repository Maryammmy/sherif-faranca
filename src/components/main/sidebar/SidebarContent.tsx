import { usePathname } from "next/navigation";
import { UserCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { mainNavItems, secondaryNavItems } from "@/src/data/main/sidebar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/src/components/ui/Button";
import SettingsPanel from "../settings/settings-panel";
import { useHeader } from "@/src/hooks";
export default function SidebarContent({
  isExpanded,
  onLinkClick,
}: {
  isExpanded: boolean;
  onLinkClick?: () => void;
}) {
  const pathname = usePathname();
  const [settingPanelOpen, setSettingPanelOpen] = useState(false);
  const { data } = useHeader();
  const name = data?.userName;
  const handleLogoClick = () => {
    window.location.href = "/"; // refresh + redirect to /
  };

  return (
    <>
      <Button
        onClick={handleLogoClick}
        className="py-5 px-2 flex items-center justify-center gap-2"
      >
        {!isExpanded && (
          <div
            className={cn(
              "relative shrink-0 w-12 h-12",
              !isExpanded && "mx-auto"
            )}
          >
            <Image
              src="/favicon.svg"
              alt="logo"
              fill
              className="w-full h-full transition-transform duration-300"
            />
          </div>
        )}
        {isExpanded && (
          // <h1
          //   className={cn(
          //     "text-3xl font-bold text-primary whitespace-nowrap overflow-hidden transition-all duration-300"
          //   )}
          // >
          //   SHERIF FARANCA
          // </h1>
          <div className="shrink-0">
            <Image
              src="/sherif-faranca.svg"
              alt="website name"
              height={35}
              width={200}
              className="transition-transform duration-300"
            />
          </div>
        )}
      </Button>
      <nav className="flex-1 px-2 space-y-2">
        {mainNavItems.map((item) =>
          item.label === "Settings" && !item?.href ? (
            <Button
              key={item.label}
              onClick={() => {
                setSettingPanelOpen((prev) => !prev);
                onLinkClick?.();
              }}
              className={cn(
                "w-full flex items-center gap-3 py-3 rounded-lg text-secondary font-medium hover:bg-purple-100 hover:text-primary transition-colors",
                isExpanded ? "px-4 justify-start" : "justify-center"
              )}
            >
              <item.icon className="w-6 h-6 shrink-0" />
              {isExpanded && (
                <span className="whitespace-nowrap overflow-hidden transition-all duration-300">
                  {item.label}
                </span>
              )}
            </Button>
          ) : (
            <Link
              key={item.label}
              href={item.href!}
              onClick={() => onLinkClick?.()}
              className={cn(
                "flex items-center gap-3 py-3 rounded-lg text-secondary font-medium hover:bg-purple-100 hover:text-primary transition-colors",
                isExpanded ? "px-4 justify-start" : "justify-center",
                pathname === item.href &&
                  "bg-primary text-white hover:bg-primary/90 hover:text-white"
              )}
            >
              <item.icon className="w-6 h-6 shrink-0" />
              {isExpanded && (
                <span className="whitespace-nowrap overflow-hidden transition-all duration-300">
                  {item.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
      <nav className="px-2 py-6 space-y-2 border-t">
        {secondaryNavItems.map((item) => (
          <Link
            key={item.label}
            href={item.href!}
            onClick={onLinkClick}
            className={cn(
              "flex items-center gap-3 py-3 rounded-lg text-secondary font-medium hover:bg-purple-100 hover:text-primary transition-colors",
              isExpanded ? "px-4 justify-start" : "justify-center"
            )}
          >
            <item.icon className="w-6 h-6 shrink-0" />
            {isExpanded && (
              <span
                className={cn(
                  "whitespace-nowrap overflow-hidden transition-all duration-300"
                )}
              >
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
            <UserCircle className="w-8 h-8 text-gray-400" />
          </div>
          {isExpanded && (
            <div
              className={cn(
                "whitespace-nowrap overflow-hidden transition-all duration-300"
              )}
            >
              {name && (
                <p className="font-semibold text-gray-800 capitalize">
                  Hey {name}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <SettingsPanel
        open={settingPanelOpen}
        onClose={() => setSettingPanelOpen(false)}
      />
    </>
  );
}
