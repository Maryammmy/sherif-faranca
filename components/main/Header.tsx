"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useSidebar } from "@/context/sidebar";
import { useHeader } from "@/hooks";
import { IHeader } from "@/interfaces/main/header";
import { Bell, ListFilter, Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CircularRing from "../ui/CircularRing";

export default function Header() {
  const { toggleMobileSidebar } = useSidebar();
  const { data } = useHeader();
  if (!data) return null;
  const { userName, activeGoals, greeting, trainingPerWeek }: IHeader = data;
  const progressValue = (activeGoals % trainingPerWeek) * 100;
  return (
    <header className="flex gap-5 items-center justify-between p-5 pb-3 border-b">
      {/* Left side: */}
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
            Hey {userName}
          </h2>
          <p className="text-sm text-gray-500">{greeting}</p>
        </div>
      </div>
      {/* Right side: */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search workouts..."
            className="pl-10 pr-4 py-2 border rounded-lg bg-white w-48 md:w-64"
          />
        </div>
        <Link
          href="/filters"
          className="p-2 border rounded-lg bg-white hidden sm:block"
        >
          <ListFilter />
        </Link>
        <div className="w-10 h-10">
          <CircularRing
            textColor="#3e1492"
            value={progressValue}
            color="#3e1492"
            strokeWidth={10}
            text={`${activeGoals}/${trainingPerWeek}`}
          />
        </div>
        <Link href="/notifications" className="relative p-2">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Link>
        <Button className="md:hidden p-2">
          <Search className="w-6 h-6 text-gray-600" />
        </Button>
      </div>
    </header>
  );
}
