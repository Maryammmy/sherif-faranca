// FaqItem.tsx
import { Button } from "@/src/components/ui/Button";
import { cn } from "@/src/lib/utils";
import { Plus, X } from "lucide-react";

interface IProps {
  id: number;
  question: string;
  answer: string;
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}

function FaqItem({ id, question, answer, activeId, setActiveId }: IProps) {
  const isActive = id === activeId;

  return (
    <div
      className={`border-b last:border-b-0 p-4 ${
        isActive ? "bg-[#F2EBFD]" : "bg-[#FAF6FF]"
      }`}
    >
      <Button
        className="flex justify-between gap-2 items-center text-start w-full font-medium"
        onClick={() => setActiveId(isActive ? null : id)}
      >
        <span>
          {String(id).padStart(2, "0")} {question}
        </span>
        <div
          className={cn(
            "w-6 h-6 rounded-full flex justify-center items-center shrink-0",
            isActive ? "bg-black" : "bg-white"
          )}
        >
          {isActive ? (
            <X className="text-white" size={12} strokeWidth={2.5} />
          ) : (
            <Plus className="text-black" size={12} strokeWidth={2.5} />
          )}
        </div>
      </Button>
      {isActive && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}

export default FaqItem;
