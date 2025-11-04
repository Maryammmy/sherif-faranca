"use client";
import { usePrivacyPolicy } from "@/src/hooks";
import Details from "./Details";
import Hero from "./Hero";
import { SkeletonCard } from "../../skeleton/Card";
import { IPrivacyPolicy } from "@/src/interfaces";

export default function PrivacyPolicy() {
  const { data } = usePrivacyPolicy();
  const privacyPolicy: IPrivacyPolicy = data?.data;
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
          <Hero imageUrl={privacyPolicy?.imageUrl} />
          <Details data={privacyPolicy} />
        </>
      )}
    </section>
  );
}
