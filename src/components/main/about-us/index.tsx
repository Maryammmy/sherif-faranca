"use client";
import Hero from "./Hero";
import Details from "./Details";
import { useAboutUs } from "@/src/hooks";
import { IAboutUs } from "@/src/interfaces/main/services";
import { SkeletonCard } from "../../skeleton/Card";

export default function AboutUs() {
  const { data } = useAboutUs();
  console.log(data);
  const aboutUsData: IAboutUs = data?.data;
  return (
    <section className="space-y-8">
      {!data ? (
        <>
          <SkeletonCard count={1} className="h-[260px]" />
          <div className="space-y-4">
            <SkeletonCard count={1} className="h-10" />
            <SkeletonCard count={1} className="h-10" />
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
