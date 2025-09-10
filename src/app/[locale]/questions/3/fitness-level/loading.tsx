import { SkeletonCard } from "@/src/components/skeleton/Card";

export default function Loading() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col justify-center items-center gap-10 padding-layout">
      <SkeletonCard count={1} className="h-10 max-w-2xl" />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <SkeletonCard count={3} className="h-[165px]" />
      </div>
    </div>
  );
}
