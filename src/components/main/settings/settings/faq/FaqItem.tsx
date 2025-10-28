// FaqItem.tsx
import { Button } from "@/src/components/ui/Button";
import { IFaq } from "@/src/interfaces/main/settings";
import { cn } from "@/src/lib/utils";
import { Plus, X } from "lucide-react";

interface IProps {
  faq: IFaq;
  isActive: boolean;
  onToggle: () => void;
}

function FaqItem({ faq, isActive, onToggle }: IProps) {
  const { question, answer, visibilityOrder } = faq;
  return (
    <div
      className={`border-b last:border-b-0 p-4 ${
        isActive ? "bg-[#F2EBFD]" : "bg-[#FAF6FF]"
      }`}
    >
      <Button
        className="flex justify-between gap-2 items-center text-start w-full font-medium"
        onClick={onToggle}
      >
        <span>
          {visibilityOrder} {question}
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
