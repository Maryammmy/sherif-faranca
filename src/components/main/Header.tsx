"use client";

import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";

import { useSidebar } from "@/src/context/sidebar";
import { useHeader, useMyNotificationsCount } from "@/src/hooks";
import { IHeader } from "@/src/interfaces/main/header";
import { Bell, ListFilter, Menu, Search } from "lucide-react";
import Image from "@/src/components/ui/Image";
import { Link } from "@/src/i18n/navigation";
import CircularRing from "../ui/CircularRing";
import { SkeletonCard } from "../skeleton/Card";
import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";

export default function Header() {
  const t = useTranslations("header");
  const { toggleMobileSidebar } = useSidebar();
  const { data } = useHeader();
  const { data: count } = useMyNotificationsCount();
  if (!data) {
    return <SkeletonCard count={1} className="h-[80px] rounded-none" />;
  }
  const { userName, activeGoals, greeting, trainingPerWeek }: IHeader = data;
  const progressValue = (activeGoals % trainingPerWeek) * 100;

  return (
    <header className="flex gap-5 items-center justify-between p-5 pb-3 border-b">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <Button
          className="lg:hidden flex items-center gap-2"
          onClick={toggleMobileSidebar}
        >
          <div className="relative shrink-0 w-12 h-12">
            <Image
              src="/favicon.svg"
              alt="logo"
              fill
              className="w-full h-full"
            />
          </div>
          <Menu />
        </Button>
        <div className="hidden lg:block">
          <h2 className="text-xl font-semibold text-gray-800">
            {t("hey")} {userName}
          </h2>
          <p className="text-sm text-secondary">{greeting}</p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder={t("searchWorkouts")}
            className="pl-10 pr-4 py-2 border rounded-lg bg-white w-48 md:w-64"
          />
        </div>

        <div className="w-10 h-10">
          <CircularRing
            textColor="#3e1492"
            value={progressValue}
            color="#3e1492"
            strokeWidth={10}
            text={`${activeGoals}/${trainingPerWeek}`}
          />
        </div>
        <Link href="/filters" className="p-2 border rounded-lg bg-white">
          <ListFilter />
        </Link>
        <Link href="/notifications" className="relative p-2">
          <Bell className="w-6 h-6 text-gray-600" />

          {/* Skeleton أو Badge */}
          {!count ? (
            // لو count لسه loading، نعرض دائرة صغيرة كسكلتون
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gray-200 animate-pulse" />
          ) : count.data > 0 ? (
            // لو فيه إشعارات، نعرض Badge
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[11px] font-semibold rounded-full"
            >
              {count.data}
            </Badge>
          ) : null}
        </Link>
        <Button className="md:hidden p-2">
          <Search className="w-6 h-6 text-gray-600" />
        </Button>
      </div>
    </header>
  );
}
