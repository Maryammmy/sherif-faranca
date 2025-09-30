import { Button } from "@/src/components/ui/Button";
import Modal from "@/src/components/ui/Modal";
import { cn } from "@/src/lib/utils";
import { Plus, X } from "lucide-react";
import { useState } from "react";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const faqData = [
  {
    id: 1,
    question: "Alright, but what exactly do you do?",
    answer:
      "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
  },
  {
    id: 2,
    question:
      "I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?",
    answer: "Yes! We can assist with execution as well as strategy.",
  },
  {
    id: 3,
    question: "Are your rates competitive?",
    answer: "We tailor our rates to deliver value while staying competitive.",
  },
  {
    id: 4,
    question: "Why do you have a monthly project cap?",
    answer:
      "We cap projects monthly to ensure focus and quality delivery for every client.",
  },
];

function Faq({ open, onClose }: IProps) {
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <Modal open={open} onClose={onClose} contentClassName="bg-[#F3F5F6]">
      <div className="bg-[#F3F5F6] max-h-[355.2] overflow-y-auto">
        {faqData.map((item) => (
          <div
            key={item.id}
            className={`border-b last:border-b-0 p-4 ${
              item.id === activeId ? "bg-[#F2EBFD]" : "bg-[#FAF6FF]"
            }`}
          >
            <Button
              className="flex justify-between gap-2 items-center text-start w-full font-medium"
              onClick={() => setActiveId(activeId === item.id ? null : item.id)}
            >
              <span className="">
                {String(item.id).padStart(2, "0")} {item.question}
              </span>
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex justify-center items-center shrink-0",
                  activeId === item.id ? "bg-black" : "bg-white"
                )}
              >
                {activeId === item.id ? (
                  <X className="text-white" size={12} strokeWidth={2.5} />
                ) : (
                  <Plus className="text-black" size={12} strokeWidth={2.5} />
                )}
              </div>
            </Button>
            {activeId === item.id && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default Faq;
