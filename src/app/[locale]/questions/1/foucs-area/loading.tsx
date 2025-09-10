import { SkeletonCard } from "@/src/components/skeleton/Card";

export default function Loading() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col justify-center items-center gap-10 padding-layout">
      <SkeletonCard count={1} className="h-10 max-w-2xl" />
      <div className="w-full max-w-2xl space-y-4">
        <SkeletonCard count={6} className="h-10 w-40" />
      </div>
    </div>
  );
}
