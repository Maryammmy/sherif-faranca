"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IProps {
  title: string;
  subTitle: string;
  link: string;
}
function Questions({ title, subTitle, link }: IProps) {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(link);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [link, router]);
  return (
    <div className="h-screen bg-primary">
      <div className="px-10 sm:px-20 h-full flex flex-col justify-center gap-3">
        <h4 className="text-white font-bold text-2xl sm:text-3xl uppercase">
          {title}
        </h4>
        <h3 className="text-white font-bold text-4xl md:text-6xl uppercase leading-11">
          {subTitle}
        </h3>
      </div>
    </div>
  );
}

export default Questions;
