import { cn } from "@/src/lib/utils";
import { useState } from "react";

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
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* بدل Button → استخدم div علشان نمنع focus scroll */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={(e) => e.preventDefault()} // 👈 يمنع أي focus أو scroll تلقائي
        onClick={onClick}
        className="flex flex-col items-center cursor-pointer"
        style={{ width: "20px" }}
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
      </div>

      {/* Tooltip بسيط لما تمرّي الماوس */}
      {hovered && (
        <span className="absolute z-10 bottom-full mb-2 px-2 py-1 rounded bg-primary text-white text-xs font-medium whitespace-nowrap">
          {value}
        </span>
      )}
    </div>
  );
}
