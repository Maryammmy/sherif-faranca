import { cn } from "@/src/lib/utils";

interface IProps {
  count: number;
  className?: string;
}
export function SkeletonCard({ count, className }: IProps) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className={cn(
            "rounded-md bg-stone-200 animate-pulse h-[250px] w-full",
            className
          )}
        />
      ))}
    </>
  );
}

interface ISingleSkeletonCardProps {
  className?: string;
}
export function SingleSkeletonCard({ className }: ISingleSkeletonCardProps) {
  return (
    <div
      className={cn(
        "rounded-md bg-stone-200 animate-pulse h-[250px] w-full",
        className
      )}
    />
  );
}
