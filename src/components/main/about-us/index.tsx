"use client";
import Hero from "./Hero";
import Details from "./Details";
import { useAboutUs } from "@/src/hooks";
import { IAboutUs } from "@/src/interfaces/main/services";

export default function AboutUs() {
  const { data } = useAboutUs();
  const aboutUsData: IAboutUs = data?.data;
  if (!data) return null;
  return (
    <section className="space-y-8">
      <Hero imageUrl={aboutUsData?.imageUrl} />
      <Details data={aboutUsData} />
    </section>
  );
}
