import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface IProps {
  value: number;
  isMajor: boolean;
  shouldHighlight: boolean;
  onClick: () => void;
}

export default function RulerTick({
  value,
  isMajor,
  shouldHighlight,
  onClick,
}: IProps) {
  return (
    <Button
      className="flex flex-col items-center cursor-pointer"
      style={{ width: "20px" }}
      onClick={onClick}
    >
      <div
        className={cn(
          "w-[2px]",
          isMajor
            ? shouldHighlight
              ? "h-10 bg-primary"
              : "h-10 bg-black"
            : shouldHighlight
            ? "h-6 bg-primary/70"
            : "h-6 bg-gray-400"
        )}
      />
      {isMajor && (
        <span
          className={cn(
            "text-sm mt-1 font-bold",
            shouldHighlight ? "text-primary" : "text-gray-700"
          )}
        >
          {value}
        </span>
      )}
    </Button>
  );
}
