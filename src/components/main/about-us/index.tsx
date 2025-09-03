"use client";
import Hero from "./Hero";
import Details from "./Details";
import { useAboutUs } from "@/src/hooks";
import { IAboutUs } from "@/src/interfaces/main/services";
import { SkeletonCard } from "../../skeleton/Card";

export default function AboutUs() {
  const { data } = useAboutUs();
  const aboutUsData: IAboutUs = data?.data;
  return (
    <section className="space-y-8">
      {!data ? (
        <>
          <SkeletonCard count={1} className="h-[260px]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4 order-2 lg:order-1">
              <SkeletonCard count={1} className="h-10" />
              <SkeletonCard count={1} className="h-10" />
            </div>
            <SkeletonCard count={1} className="h-[250px] order-1 lg:order-2" />
          </div>
        </>
      ) : (
        <>
          <Hero imageUrl={aboutUsData?.imageUrl} />
          <Details data={aboutUsData} />
        </>
      )}
    </section>
  );
}
